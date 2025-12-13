# Cloudinary Setup Guide

## Configuration

This project uses Cloudinary for media management (videos and images).

### 1. Get Your Cloudinary Credentials

1. Sign up or log in to [Cloudinary](https://cloudinary.com)
2. Go to your Dashboard
3. Copy your credentials:
   - Cloud Name
   - API Key
   - API Secret

### 2. Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Update `.env.local` with your Cloudinary credentials:
   ```env
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_actual_cloud_name
   NEXT_PUBLIC_CLOUDINARY_API_KEY=your_actual_api_key
   NEXT_PUBLIC_CLOUDINARY_API_SECRET=your_actual_api_secret
   NEXT_PUBLIC_HERO_VIDEO_ID=your_video_public_id
   ```

### 3. Upload Your Video to Cloudinary

1. Go to Cloudinary Media Library
2. Upload your video
3. Copy the Public ID (without the file extension)
4. Add it to `NEXT_PUBLIC_HERO_VIDEO_ID` in `.env.local`

### 4. Using the Cloudinary Helper Functions

The project includes helper functions in `lib/cloudinary.ts`:

#### For Videos:
```typescript
import { getCloudinaryVideoUrl } from '@/lib/cloudinary';

const videoUrl = getCloudinaryVideoUrl('video-public-id', {
  quality: 'auto',
  format: 'auto',
  transformation: 'c_scale,w_1920'
});
```

#### For Images:
```typescript
import { getCloudinaryImageUrl } from '@/lib/cloudinary';

const imageUrl = getCloudinaryImageUrl('image-public-id', {
  width: 1200,
  height: 630,
  quality: 'auto',
  format: 'auto'
});
```

### 5. Restart Development Server

After updating `.env.local`, restart your development server:
```bash
npm run dev
```

## Features

- ✅ Automatic quality optimization (`q_auto`)
- ✅ Automatic format delivery (`f_auto`)
- ✅ Custom transformations support
- ✅ Type-safe configuration
- ✅ Environment variable based setup

## Security Notes

- Never commit `.env.local` to version control
- Use `NEXT_PUBLIC_*` prefix for client-side environment variables
- Keep API secrets secure and only use them server-side when needed
