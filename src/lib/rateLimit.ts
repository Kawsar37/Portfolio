interface RateLimitStore {
  [ip: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

// Clean up expired entries every 5 minutes
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const ip in store) {
      if (store[ip].resetTime < now) {
        delete store[ip];
      }
    }
  }, 5 * 60 * 1000);
}

export function rateLimit(
  ip: string,
  limit: number = 5,
  windowMs: number = 10 * 60 * 1000
) {
  const now = Date.now();

  if (!store[ip] || store[ip].resetTime < now) {
    store[ip] = {
      count: 1,
      resetTime: now + windowMs,
    };
    return {
      success: true,
      remaining: limit - 1,
      resetInSeconds: Math.ceil(windowMs / 1000),
    };
  }

  if (store[ip].count >= limit) {
    const resetInSeconds = Math.ceil((store[ip].resetTime - now) / 1000);
    return { success: false, remaining: 0, resetInSeconds };
  }

  store[ip].count += 1;
  return {
    success: true,
    remaining: limit - store[ip].count,
    resetInSeconds: Math.ceil((store[ip].resetTime - now) / 1000),
  };
}

export function getClientIp(req: Request): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  const realIp = req.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }
  return "127.0.0.1";
}
