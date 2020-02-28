import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';

import * as actions from '../../actions';
import { ReactComponent as IconSearch } from '../../assets/icons/search.svg';
import { ReactComponent as IconSort } from '../../assets/icons/sort.svg';
import './SearchRow.css';

class SearchRow extends React.Component {
  state = {
    popupVisible: false,
  };

  popupRef = React.createRef();

  sortingButtons = [
    { text: 'A-Z', field: 'name', order: 'asc' },
    { text: 'Z-A', field: 'name', order: 'desc' },
    { text: 'Lowest price', field: 'price', order: 'asc' },
    { text: 'Highest price', field: 'price', order: 'desc' },
  ];

  handleChangeSearchText = (evt) => {
    const { searchGoods } = this.props;
    searchGoods({ text: evt.target.value });
  };

  clickPopupButton = () => {
    this.state.popupVisible ? this.hidePopup() : this.showPopup();
  };

  showPopup = () => {
    this.setState({ popupVisible: true });
    document.addEventListener('click', this.handleClickOutside);
  };

  hidePopup = () => {
    this.setState({ popupVisible: false });
    document.removeEventListener('click', this.handleClickOutside);
  };

  handleClickOutside = (evt) => {
    const node = this.popupRef.current;
    if (!node || !node.contains(evt.target)) {
      this.hidePopup();
    }
  };

  handleClickSortingButton(sortParams) {
    const { sortGoods } = this.props;
    sortGoods(sortParams);
    this.hidePopup();
  };

  renderPopupBlock() {
    const { popupVisible } = this.state;
    const { sortingState } = this.props;

    const popupCls = cn({
      'search-row__sort-popup': true,
      'search-row__sort-popup--shown': popupVisible,
    });

    const popupButtons = this.sortingButtons.map(({ text, field, order }) => {
      const isActiveButton = field === sortingState.field && order === sortingState.order;
      const buttonsCls = cn({
        'search-row__sort-popup-button': true,
        'search-row__sort-popup-button--active': isActiveButton,
      });
      return (
        <button
          key={`${field}-${order}`}
          className={buttonsCls}
          onClick={() => this.handleClickSortingButton({ field, order })}
        >
          {text}
        </button>
      );
    })

    return (
      <div className={popupCls} ref={this.popupRef}>
        { popupButtons }
      </div>
    );
  }

  render() {
    const { searchText } = this.props;
    const popupBlock = this.renderPopupBlock();

    return (
      <div className="search-row">
        <div className="search-row__input-block">
          <input
            className="search-row__input-field"
            type="text"
            value={searchText}
            placeholder="type to search"
            onChange={this.handleChangeSearchText}
          />
          <div className="search-row__input-icon">
            <IconSearch />
          </div>
        </div>
        <div className="search-row__sort-block">
          <button className="search-row__sort-button" onClick={this.clickPopupButton}>
            <IconSort />
          </button>
          { popupBlock }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sortingState: state.goods.sortingState,
  searchText: state.goods.searchText,
});

const actionCreators = {
  sortGoods: actions.sortGoods,
  searchGoods: actions.searchGoods,
};

export default connect(mapStateToProps, actionCreators)(SearchRow);
