import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsFetching } from "../../redux/shop/shop.selector";
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionOverview from "./collection-overview.component";


const mapStateToProps = createStructuredSelector({
    isLoading:selectIsCollectionsFetching
});

 const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview));

 export default CollectionOverviewContainer;