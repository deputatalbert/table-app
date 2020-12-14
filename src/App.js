import React, { Component} from 'react';
import ReactPaginate from 'react-paginate';
import * as _ from 'lodash'
import Loader from '../src/Loader/Loader';
import TableData from './TableData/TableData';
import Selectdata from './SelectData/Selectdata'

class App extends Component {

state = {
  SelectDataFlag: false,
  data: [],
  typeSort: 'asc',
  sortField: 'id',
  searchRow: '',
  isLoaded: false,
  currentPage: 0,
  addNewRow: false
}

  async componentDidMount(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    data.sort((a,b) => {
      return   a.id - b.id 
    })

    this.setState({
      data,
      isLoaded: false
    })
  }

  //Сортировка таблицы по нажатию на столбец. 39-105 строка.
  //По клику находим имя поля для сортировки и в зависимости от поля и типа сортировки, сортируем таблицу. 
  //По умолчанию сортировка по id asc (возрастанию)

  sortTable = (fieldName) => {
    console.log(fieldName);
    const sortedData = this.state.data;
    let newData = [];
    
    if (fieldName === 'id' && this.state.typeSort === 'asc') {
           
      newData = sortedData.sort((a,b) => {
          return   b.id - a.id
      })

      this.setState({
        data: newData,
        sortField: 'id',
        typeSort: 'desc'
      })
    }

    if (fieldName === 'id' && this.state.typeSort === 'desc') {
           
      newData = sortedData.sort((a,b) => {
          return   a.id - b.id
      })

      this.setState({
        data: newData,
        sortField: 'id',
        typeSort: 'asc'
      })
    }

    if (fieldName !== 'id' && this.state.typeSort === 'desc') {
      newData = sortedData.sort((a,b) => {
          
          const nameA = a[fieldName];
          const nameB = b[fieldName];
          
          if ( nameA < nameB ) {
              return   -1
          } 
          
      })
      this.setState({
        data: newData,
        sortField: fieldName,
        typeSort: 'asc'
      })
    }

    if (fieldName !== 'id' && this.state.typeSort === 'asc') {
      newData = sortedData.sort((a,b) => {
          
          const nameA = a[fieldName];
          const nameB = b[fieldName];
          
          if ( nameA > nameB ) {
              return   -1
          } 
          
      })
      this.setState({
        data: newData,
        sortField: fieldName,
        typeSort: 'desc'
      })
      
    }
  }

  searchRow = (word) => {
    this.setState({
      searchRow: word,
      currentPage: 0
    })
  }

  // Отмена фильтрации
  cancelSearch = () => {
    this.setState({
      searchRow: ''
    }) 
    return this.state.data
  }

  selectData = (url) => {
    this.setState({
      SelectDataFlag: true,
      isLoaded: true
    })

    this.componentDidMount(url)   
  }

  handlePageClick = ({selected}) => {
    this.setState({
      currentPage: selected
    })
  }

  getFilterData = () => {
    const {data, searchRow} = this.state;
    if (!searchRow) {
      return data
    }
      return data.filter((elem) => {
        return elem['firstName'].toLowerCase().includes(searchRow.toLowerCase()) ||
               elem['lastName'].toLowerCase().includes(searchRow.toLowerCase()) ||
               elem['email'].toLowerCase().includes(searchRow.toLowerCase()) ||
               elem['phone'].toLowerCase().includes(searchRow.toLowerCase())
      })
  }

  addRow = () => {
    this.setState({
      addNewRow: !this.state.addNewRow
    })
  }

  inFormAddField = (id, first, lastname, email, phone) => {
    const cloneData = this.state.data;
    let newArrayData = [];
    if (id && first && lastname && email && phone) {
      const addNewData = {
        id: id,
        firstName: first,
        lastName: lastname,
        email,
        phone,
        address: {
          streetAddress: "User from form",
          city: "User from form",
          state: "User from form",
          zip: "User from form"
        },
        description: "User from form"
      }

      newArrayData = [addNewData, ...cloneData];
  
      this.setState({
        data: newArrayData,
        addNewRow: !this.state.addNewRow
      })
    }
  }

  render() {

    const pageSize = 50;
    const filterData = this.getFilterData();

    if (!this.state.SelectDataFlag) {
      return (
        <Selectdata onSelect={this.selectData}/>
      )
      
    }
    
    const onDisplayData = _.chunk(filterData, pageSize)[this.state.currentPage];
    const pageCount = Math.ceil( filterData.length / pageSize);

    return (
      <div className="container">
        {
          this.state.isLoaded ? <Loader />
          : <TableData
              sortTable={this.sortTable}
              sortField={this.state.sortField}
              typeSort={this.state.typeSort}
              searchRow={this.searchRow}
              cancelSearch={this.cancelSearch}
              addRow={this.addRow}
              addField={this.inFormAddField}
              showForm={this.state.addNewRow} 
              data={onDisplayData}
            />
        }
        {
          this.state.data.length > pageSize 
          ?
          <ReactPaginate
          previousLabel={'<<'}
          nextLabel={'>>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          nextClassName="page-item"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          forcePage={this.state.currentPage}
        /> : ''
        }
      </div>
    );
  }
}
  

export default App;
