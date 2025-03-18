import Image from 'next/image';

interface CategoriesProps {
    dataCategory: string;
    setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
    dataCategory,
    setCategory
}) => {
    return (
        <>
            <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
                <div
                    onClick={() => setCategory('Beach')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Beach' ? 'border-pink-800' : 'border-white'} opacity-60 hover:border-pink-500 hover:opacity-100`}
                >
                    <Image
                        src="/icn_category_beach.png"
                        alt="Category - Playita"
                        width={20}
                        height={20}
                    />
                    <span className='text-xs'>Playa</span>
                </div>

                <div
                    onClick={() => setCategory('Villas')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Villas' ? 'border-pink-800' : 'border-white'} opacity-60 hover:border-pink-500 hover:opacity-100`}
                >
                    <Image
                        src="/icn_category_beach.png"
                        alt="Category - Playita"
                        width={20}
                        height={20}
                    />
                    <span className='text-xs'>Villas</span>
                </div>

                <div
                    onClick={() => setCategory('Cabins')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Cabins' ? 'border-pink-800' : 'border-white'} opacity-60 hover:border-pink-500 hover:opacity-100`}
                >
                    <Image
                        src="/icn_category_beach.png"
                        alt="Category - Playita"
                        width={20}
                        height={20}
                    />
                    <span className='text-xs'>Cabañas</span>
                </div>

                <div
                    onClick={() => setCategory('Tiny homes')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Tiny homes' ? 'border-pink-800' : 'border-white'} opacity-60 hover:border-pink-500 hover:opacity-100`}
                >
                    <Image
                        src="/icn_category_beach.png"
                        alt="Category - Playita"
                        width={20}
                        height={20}
                    />
                    <span className='text-xs'>Casas peques</span>
                </div>
            </div>
        </>
    )
}

export default Categories;