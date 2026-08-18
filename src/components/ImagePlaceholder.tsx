import React, { useState } from 'react';
import { Camera, Shield, Eye, Video, Radio, Cpu, CheckCircle2 } from 'lucide-react';

interface ImagePlaceholderProps {
  src: string;
  alt: string;
  className?: string;
  type?: 'hero' | 'about' | 'product' | 'project';
  title?: string;
  subtitle?: string;
  cameraCode?: string;
  aspectRatio?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  src,
  alt,
  className = '',
  type = 'project',
  title,
  subtitle,
  cameraCode = 'CAM-01 [LIVE]',
  aspectRatio = 'aspect-video'
}) => {
  const [imageError, setImageError] = useState(true); // default to true since local images are placeholders, will gracefully show high-tech graphics
  const [imageLoaded, setImageLoaded] = useState(false);

  // If real image exists and loads, show it!
  const handleLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  return (
    <div className={`relative overflow-hidden rounded-xl bg-slate-900 border border-slate-800 group ${aspectRatio} ${className}`}>
      {/* Real image attempt */}
      {!imageError && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
        />
      )}

      {/* High-Tech CCTV Surveillance Graphic Display (Active if image is placeholder or loading) */}
      {(imageError || !imageLoaded) && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-[#0A192F] flex flex-col justify-between p-4 sm:p-5 select-none">
          {/* Subtle Grid Lines and Radar Pattern */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[linear-gradient(to_right,#0ea5e9_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e9_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          {/* Top HUD: Status Bar */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-cyan-400">
            <div className="flex items-center space-x-2 bg-slate-950/80 px-2.5 py-1 rounded border border-cyan-500/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-red-500 -ml-4" />
              <span className="font-semibold text-slate-200 tracking-wider">REC</span>
              <span className="text-slate-500">|</span>
              <span className="text-cyan-300 font-semibold">{cameraCode}</span>
            </div>
            
            <div className="hidden sm:flex items-center space-x-2 text-slate-400 bg-slate-950/80 px-2.5 py-1 rounded border border-slate-800">
              <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>1080P • 30FPS</span>
            </div>
          </div>

          {/* Center Graphic: CCTV Crosshair & Vector Visual */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center px-4">
            <div className="relative mb-3">
              {/* Concentric rings */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-cyan-500/20 flex items-center justify-center group-hover:border-cyan-400/40 transition-colors">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-cyan-500/40 flex items-center justify-center bg-cyan-950/30">
                  {type === 'hero' && <Video className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" />}
                  {type === 'about' && <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" />}
                  {type === 'product' && <Camera className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" />}
                  {type === 'project' && <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" />}
                </div>
              </div>
              
              {/* Corner focus brackets */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />
            </div>

            {title && (
              <h4 className="text-white font-semibold text-sm sm:text-base tracking-wide line-clamp-1">
                {title}
              </h4>
            )}
            {subtitle && (
              <p className="text-slate-400 text-xs mt-0.5 line-clamp-1 max-w-xs">
                {subtitle}
              </p>
            )}
          </div>

          {/* Bottom HUD: Watermark and Target Location */}
          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800/80">
            <div className="flex items-center space-x-1.5 text-cyan-300/80">
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-semibold tracking-wider">PUSTEKINDO SURVEILLANCE</span>
            </div>
            <div className="text-slate-500 font-mono hidden xs:block">
              SECURE LINK ACTIVE
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
