import React from 'react'

export const NoContactSelected = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full py-12 text-center text-muted-foreground">
      <svg width="64" height="64" fill="none" viewBox="0 0 64 64" className="mb-4">
        <circle cx="32" cy="32" r="32" fill="#f3f4f6" />
        <path d="M32 20a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 20c-7.732 0-14 3.134-14 7v3h28v-3c0-3.866-6.268-7-14-7z" fill="#a1a1aa" />
      </svg>
      <h2 className="text-lg font-semibold mb-2">Selecciona un contacto</h2>
      <p className="mb-4">Elige un contacto de la lista para comenzar a chatear.</p>
    </div>
  );
}
