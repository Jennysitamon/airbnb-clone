'use client';

import useSearchModal from "@/app/hooks/useSearchModal";

const SearchFilters = () => {
    const searchModal = useSearchModal();

    return (
        <div
            onClick={() => searchModal.open('location')}            
            className="h-[48px] lg:h-[64] flex flex-row items-center justify-between border rounded-full"
        >
            <div className="hidden lg:block">
                <div className="flex flex-row items-center justify-between w-full">
                    <div className="cursor-pointer w-[250px] h-[48px] lg:h-[64] px-8 flex flex-col items-center justify-center rounded-full hover:bg-pink-100 text-center">
                        <p className="text-xs font-semibold">¿Dónde?📍</p>
                        <p className="text-sm text-gray-500">Ubicación deseada</p>
                    </div>

                    <div className="cursor-pointer h-[64px] lg:h-[64] px-8 flex flex-col items-center justify-center rounded-full hover:bg-pink-100 text-center">
                        <p className="text-xs font-semibold">Registrarse✏️</p>
                        <p className="text-sm text-gray-500">Agregar fecha</p>
                    </div>

                    <div className="cursor-pointer h-[64px] lg:h-[64] px-8 flex flex-col items-center justify-center rounded-full hover:bg-pink-100 text-center">
                        <p className="text-xs font-semibold">Verificar✅</p>
                        <p className="text-sm text-gray-500">Agregar fecha</p>
                    </div>

                    <div className="cursor-pointer h-[64px] lg:h-[64] px-8 flex flex-col items-center justify-center rounded-full hover:bg-pink-100 text-center">
                        <p className="text-xs font-semibold">¿Quién?👥</p>
                        <p className="text-sm text-gray-500">Agregar persona</p>
                    </div>
                </div>
            </div>

            <div className="p-2">
                <div className="cursor-pointer p-2 lg:p-4 bg-airbnb hover:bg-airbnb-dark transition rounded-full text-white">
                    <svg
                        viewBox="0 0 32 32"
                        style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentColor', strokeWidth: 4, overflow: 'visible' }}
                        aria-hidden="true" role="presentation" focusable="false">
                        <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
                    </svg>
                </div>
            </div>
        </div>

    )
}

export default SearchFilters;
