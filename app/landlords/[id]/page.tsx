import Image from "next/image";

import ContactButton from "@/app/components/ContactButton";

import PropertyList from "@/app/components/properties/PropertyList";

const LandlordDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <aside className="col-span-1 mb-4">
                    <div className="p-4 rounded-lg border border-pink-300 shadow-md text-center">
                        <Image
                            src='/profile_pic_1.png'
                            width={200}
                            height={200}
                            alt="Landlord name"
                            className="rounded-full mx-auto"
                        />
                        <h1 className="mt-4 text-2xl font-semibold">Billie name</h1>
                        <ContactButton />
                    </div>
                </aside>

                <div className="col-span-1 md:col-span-3 pl-0 md:pl-6">
                    <div className="grid gid-cols-1 md:grid-cols-3 gap-6">
                        <PropertyList />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default LandlordDetailPage;
