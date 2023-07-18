import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';

function GeneralHead() {
    return (
      <DefaultSeo {...SEO} />
    )
  }
  
export default GeneralHead