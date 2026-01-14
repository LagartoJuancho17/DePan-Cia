
import React from 'react';

interface Props {
  onImageSelected: (base64: string) => void;
  currentImage?: string;
  label: string;
}

const ImageUploader: React.FC<Props> = ({ onImageSelected, currentImage, label }) => {
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && (file.type === 'image/webp' || file.type.startsWith('image/'))) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            // Max dimensions
            const MAX_WIDTH = 800;
            const MAX_HEIGHT = 800;
            
            let width = img.width;
            let height = img.height;
            
            if (width > height) {
              if (width > MAX_WIDTH) {
                height *= MAX_WIDTH / width;
                width = MAX_WIDTH;
              }
            } else {
              if (height > MAX_HEIGHT) {
                width *= MAX_HEIGHT / height;
                height = MAX_HEIGHT;
              }
            }
            
            canvas.width = width;
            canvas.height = height;
            
            ctx?.drawImage(img, 0, 0, width, height);
            
            const compressedBase64 = canvas.toDataURL('image/jpeg', 0.6);
            onImageSelected(compressedBase64);
          };
          img.src = event.target.result as string;
        }
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please drop an image file (webp preferred).');
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            // Max dimensions
            const MAX_WIDTH = 800;
            const MAX_HEIGHT = 800;
            
            let width = img.width;
            let height = img.height;
            
            if (width > height) {
              if (width > MAX_WIDTH) {
                height *= MAX_WIDTH / width;
                width = MAX_WIDTH;
              }
            } else {
              if (height > MAX_HEIGHT) {
                width *= MAX_HEIGHT / height;
                height = MAX_HEIGHT;
              }
            }
            
            canvas.width = width;
            canvas.height = height;
            
            ctx?.drawImage(img, 0, 0, width, height);
            
            // Compress
            const compressedBase64 = canvas.toDataURL('image/jpeg', 0.6); // 60% quality
            onImageSelected(compressedBase64);
          };
          img.src = event.target.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const preventDefaults = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div>
      <label className="block text-[10px] font-bold uppercase tracking-widest opacity-50 mb-1">{label}</label>
      <div 
        onDrop={handleDrop}
        onDragOver={preventDefaults}
        onDragEnter={preventDefaults}
        className="w-full h-32 border-2 border-dashed border-black/10 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-[#D12626] hover:bg-[#D12626]/5 transition-all relative overflow-hidden group"
      >
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleFileSelect} 
          className="absolute inset-0 opacity-0 cursor-pointer z-10"
        />
        
        {currentImage ? (
          <img src={currentImage} className="absolute inset-0 w-full h-full object-contain p-2" alt="Preview" />
        ) : (
          <div className="text-center p-4">
             <span className="text-2xl mb-2 block">📷</span>
             <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">Drag & Drop or Click</p>
          </div>
        )}
        
        {currentImage && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
            <p className="text-white text-[10px] font-bold uppercase tracking-widest">Replace Image</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
