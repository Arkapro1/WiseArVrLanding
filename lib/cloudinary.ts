// Cloudinary configuration
export const cloudinaryConfig = {
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || '',
  apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || '',
  apiSecret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET || '',
};

// Helper function to get Cloudinary video URL
export const getCloudinaryVideoUrl = (publicId: string, options?: {
  quality?: string;
  format?: string;
  transformation?: string;
}) => {
  const { cloudName } = cloudinaryConfig;
  const { quality = 'auto', format = 'auto', transformation = '' } = options || {};
  
  if (!cloudName) {
    console.error('Cloudinary cloud name is not configured');
    return '';
  }

  const transformations = [
    quality && `q_${quality}`,
    format && `f_${format}`,
    transformation,
  ].filter(Boolean).join(',');

  const transformationPath = transformations ? `${transformations}/` : '';
  
  return `https://res.cloudinary.com/${cloudName}/video/upload/${transformationPath}${publicId}`;
};

// Helper function to get Cloudinary image URL
export const getCloudinaryImageUrl = (publicId: string, options?: {
  width?: number;
  height?: number;
  quality?: string;
  format?: string;
  transformation?: string;
}) => {
  const { cloudName } = cloudinaryConfig;
  const { width, height, quality = 'auto', format = 'auto', transformation = '' } = options || {};
  
  if (!cloudName) {
    console.error('Cloudinary cloud name is not configured');
    return '';
  }

  const transformations = [
    width && `w_${width}`,
    height && `h_${height}`,
    quality && `q_${quality}`,
    format && `f_${format}`,
    transformation,
  ].filter(Boolean).join(',');

  const transformationPath = transformations ? `${transformations}/` : '';
  
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformationPath}${publicId}`;
};
