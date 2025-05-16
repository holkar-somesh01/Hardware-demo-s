// import { Star } from 'lucide-react';

// interface ReviewProps {
//   review: {
//     id: number;
//     name: string;
//     rating: number;
//     text: string;
//     date: string;
//   };
// }

// const ReviewCard = ({ review }: ReviewProps) => {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <div className="flex items-center mb-4">
//         <div className="bg-amber-100 text-amber-600 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">
//           {review.name.charAt(0)}
//         </div>
//         <div>
//           <h4 className="font-semibold text-gray-800">{review.name}</h4>
//           <p className="text-gray-500 text-sm">{review.date}</p>
//         </div>
//       </div>

//       <div className="flex mb-3">
//         {[...Array(5)].map((_, i) => (
//           <Star 
//             key={i} 
//             className={`${i < review.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} 
//             size={18} 
//           />
//         ))}
//       </div>

//       <p className="text-gray-600">{review.text}</p>
//     </div>
//   );
// };

// export default ReviewCard;












import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ReviewProps {
  review: {
    id: number;
    name: string;
    rating: number;
    text: string;
    date: string;
  };
}

const ReviewCard = ({ review }: ReviewProps) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="bg-amber-100 text-amber-600 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">
          {review.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{review.name}</h4>
          <p className="text-gray-500 text-sm">
            {t('review.date', { date: review.date })}
          </p>
        </div>
      </div>

      <div className="flex mb-3" aria-label={t('review.rating', { count: review.rating })}>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`${i < review.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`}
            size={18}
          />
        ))}
      </div>

      <p className="text-gray-600">{review.text}</p>
    </div>
  );
};

export default ReviewCard;
