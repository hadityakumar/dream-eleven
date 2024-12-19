"use client";

export function LoadingBubbles() {
  return (
    <div className="flex items-center gap-2 p-4">
      <div className="flex gap-1">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
            style={{
              animationDelay: `${i * 0.2}s`,
              animationDuration: "1s",
            }}
          />
        ))}
      </div>
    </div>
  );
}