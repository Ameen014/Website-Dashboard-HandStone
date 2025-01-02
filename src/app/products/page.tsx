import Search from "../ui/search";
import ProductsBox from "../ui/productsBox";
import { fetchProducts } from "../lib/data";

export default async function Page(props: { searchParams?: Promise<{ keywords?: string , categoryId?: number , ordercompleted?:string }> }) {

    const searchParams = await props.searchParams;
    const categoryId = searchParams.categoryId || null;
    const keywords = searchParams.keywords || "";
    const order = searchParams.ordercompleted;

    const products = await fetchProducts(keywords , categoryId);

    return (<>
        <div className="flex flex-col md:flex-row items-start gap-4 p-4">
            <Search />
        </div>
        <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 font-[Cairo]">منتجاتنا :  </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <ProductsBox products={products} orders={order} />
            </div>
        </div>
      </>);
};