// import { PenToolIcon as ToolIcon } from 'lucide-react';

// const Logo = () => {
//   return (
//     <div className="flex items-center">
//       <ToolIcon className="text-amber-600 mr-2" size={28} />
//       <div>
//         <h1 className="font-bold text-xl text-gray-800">Kalash Hardware</h1>
//         <span className="text-xs text-gray-600 -mt-1 block">Established 2018</span>
//       </div>
//     </div>
//   );
// };

// export default Logo;




import { PenToolIcon as ToolIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Logo = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center">
      <ToolIcon className="text-amber-600 mr-2" size={28} />
      <div>
        <h1 className="font-bold text-xl text-gray-800">{t('logo.title')}</h1>
        <span className="text-xs text-gray-600 -mt-1 block">{t('logo.subtitle')}</span>
      </div>
    </div>
  );
};

export default Logo;
