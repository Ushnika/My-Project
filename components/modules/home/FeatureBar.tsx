"use client";

import { Card } from "@/components/ui/card";
import { features } from "@/data/feature-list";

export function FeatureBar() {
  return (
    <Card className="flex flex-row items-center justify-between px-6 py-4 gap-4 rounded-sm">
      {features.map((item, index) => {
        const Icon = item.icon;

        return (
          <div key={index} className="flex items-center gap-3 w-full">
            {/* Divider */}
            {index > 0 && (
              <div className="hidden md:block h-10 w-px bg-border mx-6" />
            )}
            {/* Icon */}
            <div className="text-primary">
              <Icon className="w-6 h-6" />
            </div>

            {/* Text */}
            <div>
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>

            
          </div>
        );
      })}
    </Card>
  );
};


