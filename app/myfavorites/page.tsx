import PropertyList from "../components/properties/PropertyList";
import { getUserId } from "../lib/actions";

const MyFavoritesPage = async () => {
    const userId = await getUserId();

    if (!userId) {
        return (
            <main className="max-w-[1500px] max-auto px-6 pb-12">
                <p>Tu necesitas autenticación...</p>
            </main>
        )
    }

    return (
        <main className="max-w-[1500px] max-auto px-6 pb-12">
            <h1 className="my-6 text-2xl">My favoritos</h1>

            <div className="grid gid-cols-1 md:grid-cols-3 gap-6">
                <PropertyList
                    favorites={true}
                />
            </div>
        </main>
    )
}

export default MyFavoritesPage;
