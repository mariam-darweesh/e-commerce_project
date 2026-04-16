import Button from "../ui/Button";
import PageContainer from "../layout/PageContainer";

export default function Hero(){
    return (
        <section className="py-12">
            <PageContainer>
                <div className="grid gap-10 md:grid-col-2 md:items-center">
                    <div>
                        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                            New Collection
                        </span>

                        <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
                            Discover Products That Match Your Style
                        </h1>

                        <p className="mt-4 max-w-lg text-gray-600">
                            Shop Fashion, electronics, and accessories with a clean and modern shopping experiance.
                        </p>

                        <div className="mt-6 flex gap-4">
                            <Button>Shop Now</Button>
                            <Button className="bg-white text-gray-900 border border-gray-300 hover:bg-gray-100">
                                Explore Deals
                            </Button>
                        </div>

                        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
                            <img
                            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80"
                            alt="Shopping banner"
                            className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </PageContainer>
        </section>
    )
}