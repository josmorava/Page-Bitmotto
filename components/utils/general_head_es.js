import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo-es.config';

function GeneralHeadEs() {
    return (
      <DefaultSeo {...SEO} />
    )
  }
  
export default GeneralHeadEs