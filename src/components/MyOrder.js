import OrderCard from "./OrderCard"


const MyOrder = ({ heado }) => {
    return ( 
        <div>
            <OrderCard 
            head_text={'Keraton'} 
            text={'lormem ipsum ttej rfwcs '}
            />
            <OrderCard 
            head_text={'brilla'} 
            text={'lormem ipsum ttej rfwcs '}
            />

            <div className="summary">
                { heado }
            </div>
        </div>
     );
}
 
export default MyOrder;