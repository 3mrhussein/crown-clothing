import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { isCollectionsIsLoaded } from "../../redux/shop/shop.selector";
import CollectionPage from './collection.component'
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { compose } from "redux";


const mapStateToProps = createStructuredSelector({
    isLoading:state=>!isCollectionsIsLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);


export default CollectionPageContainer;