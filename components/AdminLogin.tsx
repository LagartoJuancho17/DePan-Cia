
import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AdminLogin: React.FC<Props> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContent();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(username, password)) {
      onClose();
      setUsername('');
      setPassword('');
      setError('');
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white p-8 md:p-12 w-full max-w-md relative shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-xs font-bold uppercase tracking-widest hover:text-[#D12626]"
        >
          Close
        </button>
        
        <div className="text-center mb-10">
          <p className="text-[#D12626] text-[10px] font-black uppercase tracking-[0.3em] mb-2">Restricted Access</p>
          <h2 className="text-3xl font-black uppercase tracking-tighter">Admin Panel</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest opacity-50">Username</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border-b border-black/20 py-2 font-bold focus:outline-none focus:border-[#D12626] transition-colors bg-transparent"
              placeholder="Enter username"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest opacity-50">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b border-black/20 py-2 font-bold focus:outline-none focus:border-[#D12626] transition-colors bg-transparent"
              placeholder="Enter password"
            />
          </div>

          {error && <p className="text-[#D12626] text-xs font-bold text-center">{error}</p>}

          <button 
            type="submit"
            className="w-full bg-[#2a2a2a] text-white py-4 font-black uppercase tracking-[0.2em] text-xs hover:bg-[#D12626] transition-colors"
          >
            Enter Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
