import Head from 'next/head';
import { SEO } from '~/constants/seo';

interface SeoTagsProps {
  title?: string;
  pageUrl?: string;
  mainImage?: string;
  iosApplink?: string;
  description?: string;
  androidAppLink?: string;
  headComponent?: any;
}

const SeoTags = (props: SeoTagsProps) => {
  const HeadComponent: any = props?.headComponent || Head;
  const metaName: { [key: string]: string } = {
    author: SEO.author,
    robots: 'index,follow',
    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    description: props?.description || SEO.description,
    'theme-color': '#ffffff',
    'naver-site-verification': '',
    'msapplication-TileColor': '#ffffff',
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'google-site-verification': 'verification_token',
  };

  const metaProperty: { [key: string]: string } = {
    'fb:app_id': SEO.fbAppId,
    'article:author': SEO.author,
    'al:web:url': SEO.quizBuzzHomeUrl,
    'al:ios:url': props?.iosApplink || SEO.quizBuzzHomeUrl,
    'al:ios:app_name': SEO.appName,
    'al:ios:app_store_id': SEO.appstoreId,
    'al:android:url': props?.androidAppLink || SEO.quizBuzzHomeUrl,
    'al:android:package': SEO.androidPackageId,
    'al:android:app_name': SEO.appName,
    'og:url': props?.pageUrl || SEO.siteUrl,
    'og:type': 'website',
    'og:title': props?.title || SEO.title,
    'og:image': props?.mainImage || SEO.mainImage,
    'og:locale': 'ko_KR',
    'og:site_name': props?.title || SEO.title,
    'og:description': props?.description || SEO.description || '',
  };

  const hrefFavIcon = (size: number) => `/static/images/app-icon/favicon-${size}x${size}.png`;
  const hrefAppleIcon = (size: number) => `/static/images/app-icon/apple-icon-${size}x${size}.png`;
  const sizesFavIcon = [16, 32, 96];
  const sizesAppleIcon = [57, 60, 72, 76, 114, 120, 144, 152, 180];

  return (
    <HeadComponent>
      <title>{props?.title || SEO.title}</title>
      <meta charSet='utf-8' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />

      <base href={process.env.WEBAPP_URL} />
      <link href={props?.pageUrl || SEO.siteUrl} rel='canonical' />
      <link href='manifest.json' rel='manifest' />

      {Object.keys(metaName).map((name: string) => (
        <meta key={name} name={name} content={metaName[name]} />
      ))}
      {Object.keys(metaProperty).map((property: string) => (
        <meta key={property} property={property} content={metaProperty[property]} />
      ))}

      {sizesFavIcon.map((size) => (
        <link
          key={size}
          sizes={`${size}x${size}`}
          href={hrefFavIcon(size)}
          rel='icon'
          type='image/png'
        />
      ))}
      {sizesAppleIcon.map((size) => (
        <link
          key={size}
          sizes={`${size}x${size}`}
          href={hrefAppleIcon(size)}
          rel='apple-touch-icon'
        />
      ))}

      <link
        rel='icon'
        type='image/png'
        sizes='192x192'
        href='/static/images/app-icon/android-icon-192x192.png'
      />
    </HeadComponent>
  );
};

export default SeoTags;
