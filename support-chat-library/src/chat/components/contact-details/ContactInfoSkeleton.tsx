export const ContactInfoSkeleton = () => {
  // Skeleton item component for reusability
  const SkeletonItem = ({ className }: { className: string }) => (
    <div className={`bg-gray-200 animate-pulse rounded ${className}`}></div>
  );

  return (
    <div className="p-4">
      {/* Profile Section */}
      <div className="flex flex-col items-center pb-6 border-b">
        <SkeletonItem className="h-20 w-20 rounded-full mb-3" />
        <SkeletonItem className="h-6 w-40 mb-2" />
        <SkeletonItem className="h-4 w-28 mb-3" />
        <div className="flex items-center">
          <SkeletonItem className="h-2 w-2 rounded-full mr-1" />
          <SkeletonItem className="h-2 w-12" />
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="py-4 space-y-4">
        <div>
          <SkeletonItem className="h-4 w-32 mb-3" />
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex justify-between">
                <SkeletonItem className="h-3 w-16" />
                <SkeletonItem className="h-3 w-24" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <SkeletonItem className="h-4 w-32 mb-3" />
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex justify-between">
                <SkeletonItem className="h-3 w-20" />
                <SkeletonItem className="h-3 w-16" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Button Skeleton */}
      <div className="pt-4 border-t">
        <SkeletonItem className="h-9 w-full rounded-md" />
      </div>
    </div>
  );
};
