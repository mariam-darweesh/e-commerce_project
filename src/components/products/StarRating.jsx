import React from "react";
import { Star } from "lucide-react";

function StarIcon({ fillPercent }){
    return (
        <div className="relative w-4 h-4">         
            <Star
                className="absolute inset-0 w-4 h-4 text-gray-300" 
            />
            <div className="absolute inset-0 overflow-hidden"
                style={{ width: `${fillPercent}%`}}
            >
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            </div>
        </div>
    )

}

export default function StarRating ({ rating = 0 }) {
    return (
        <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => {
                const fillPercent = Math.max(0, Math.min(100, (rating - star + 1) * 100));

                return <StarIcon key={star} fillPercent={fillPercent} />;
            })}

            <span className="ml-1 text-sm text-gray-600">
                ({rating.toFixed(1)})
            </span>
        </div>
    )
}