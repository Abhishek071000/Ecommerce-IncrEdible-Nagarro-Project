import Product from "./Product";

function ProductFeed({ products }) {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
            
            {/* shows first 4 products */}
 
                {/* Product 1 */}
                <Product 
                    key="49538094"
                    id="49538094"
                    title="Milk" 
                    mrp = {45}
                    price={35} 
                    description="1 Liter Carton"
                    expiry="Expiry: in 3 days"
                    category="Dairy"
                    image="https://i.imgur.com/veoq3w7.jpg" 
                />

                {/* Product 2 */}
                <Product 
                    key="24567834"
                    id="24567834"
                    title="Amul Ghee" 
                    mrp={255}
                    price={230} 
                    description="500 Ml Carton"
                    expiry="Expiry: in 2 months"
                    category="Dairy"
                    image="https://i.imgur.com/wsOwq5a.jpg" 
                />

                {/* Product 3 */}
                <Product 
                    key="89056731"
                    id="89056731"
                    title="Bread" 
                    mrp={32}
                    expiry="Expiry: in 5 Days"
                    price={28} 
                    description="450g Pack"
                    category="Grains"
                    image="https://i.imgur.com/DH3rVjx.png" 
                />

                {/* Product 4 */}
                <Product 
                    key="89567234"
                    id="89567234"
                    title="Dairy Milk Silk"
                    mrp={525}
                    expiry="Expiry: in 1 month" 
                    price={475} 
                    description="Roasted Almonds Pack of 3"
                    category="Sweets"
                    image="https://i.imgur.com/T0hFk9b.png" 
                />


            {/* shows advetisment */}
            <img 
                className="md:col-span-full" 
                src="https://i.imgur.com/gVF3WeX.png" 
                alt="" 
            />

            {/* shows next object that can span ipto 2 col */}
            <div className="md:col-span-2">
                {/* Product 5 */}
                <Product 
                    key="34512790"
                    id="34512790"
                    title="Oreo"
                    mrp={30}
                    expiry="Expiry: in 1 month"  
                    price={20} 
                    description="Chocolate flavour, 120 g"
                    category="Biscuits"
                    image="https://i.imgur.com/5GQFApw.jpg" 
                />

            </div>

            {/* shows rest of the products */}
            
                {/* Product 6 */}
                <Product 
                    key="67894532"
                    id="67894532"
                    title="Amul Butter" 
                    mrp={235}
                    expiry="Expiry: 3 weeks" 
                    price={200} 
                    description="Pasteurised, 500g"
                    category="Dairy"
                    image="https://i.imgur.com/JtyZt9M.jpg" 
                />

                {/* Product 7 */}
                <Product 
                    key="87107712"
                    id="87107712"
                    title="Maggi" 
                    mrp={25}
                    expiry="Expiry: in 2 months" 
                    price={20} 
                    description="140g Pack"
                    category="Snacks"
                    image="https://i.imgur.com/QlyLUDx.jpg" 
                />

                {/* Product 8 */}
                <Product 
                    key="87107711"
                    id="87107711"
                    title="Aloo Tikki" 
                    mrp={180}
                    expiry="Expiry: in 1 month" 
                    price={120} 
                    description="760g Pack"
                    category="Snacks"
                    image="https://i.imgur.com/tWFpjZi.jpg" 
                />

                {/* Product 9 */}
                <Product 
                    key="87107710"
                    id="87107710"
                    title="Sugar" 
                    mrp={55}
                    expiry="Expiry: in 1 month" 
                    price={40} 
                    description="1kg Pack"
                    category="Grocery"
                    image="https://i.imgur.com/dMs8SOQ.jpg" 
                />

                {/* Product 10 */}
                <Product 
                    key="87107709"
                    id="87107709"
                    title="Aashirvaad Atta" 
                    mrp={193}
                    expiry="Expiry: in 3 months" 
                    price={150} 
                    description="5Kg Pack"
                    category="Grains"
                    image="https://i.imgur.com/VfoGFi1.jpg" 
                />


                {/* Product 11 */}
                <Product 
                    key="34512784"
                    id="34512784"
                    title="Kellogg's Chocos" 
                    mrp={125}
                    expiry="Expiry: in 2 months" 
                    price={100} 
                    description="250g Pack"
                    category="Cereal"
                    image="https://i.imgur.com/nrftukJ.jpg" 
                />

                {/* Product 12 */}
                <Product 
                    key="87107705"
                    id="87107705"
                    title="Channa" 
                    mrp={150}
                    expiry="Expiry: in 2 months" 
                    price={120} 
                    description="1Kg Pack"
                    category="Pulses"
                    image="https://i.imgur.com/Z2uhcdq.jpg" 
                />

                {/* Product 13 */}
                <Product 
                    key="87107706"
                    id="87107706"
                    title="Lays" 
                    mrp={25}
                    expiry="Expiry: in 1 month"
                    price={18} 
                    description="95g Pack"
                    category="Snacks"
                    image="https://i.imgur.com/1EDMkss.jpg" 
                />

                {/* Product 14 */}
                <Product 
                    key="87107707"
                    id="87107707"
                    title="Coca-Cola"
                    mrp={40}
                    expiry="Expiry: in 2 weeks" 
                    price={30} 
                    description="750ml Bottle"
                    category="Drinks"
                    image="https://i.imgur.com/d6urxM4.jpg" 
                />

                {/* Product 15 */}
                <Product 
                    key="87107708"
                    id="87107708"
                    title="Red-Label" 
                    mrp={170}
                    expiry="Expiry: in 3 weeks" 
                    price={140} 
                    description="250g Pack"
                    category="Drinks"
                    image="https://i.imgur.com/HarsyFs.jpg" 
                />

        </div>
    )
}

export default ProductFeed
