"use strict";

// // es5 polyfills, powered by es5-shim
require("es5-shim")
// // es6 polyfills, powered by babel
require("babel/register")
require("jquery")

var Promise = require('es6-promise').Promise,
    Backbone = require('backbone'),
    React = require('react'),
    cryptsy_url = 'http://pubapi.cryptsy.com/api.php?method=singleorderdata&marketid=249',
    bittrex_url = 'https://bittrex.com/api/v1.1/public/getorderbook?market=BTC-LTC&type=both&depth=50',
    poloniex_url = 'http://poloniex.com/public?command=returnOrderBook&currencyPair=BTC_NXT&depth=50'

// console.log(cryptsy_url)
 

var React = require('react');
var FixedDataTable = require('fixed-data-table');

var Table = FixedDataTable.Table;
var Column = FixedDataTable.Column;


export class MyDataTable extends React.Component{
    constructor(props){
        super(props)
        this.props.rows = [

           [ "Quantity", "3.00000046", "Rate", "0.02282093"],
        
           [ "Quantity", "4.27014059", "Rate", "0.02282092"],
        
           [ "Quantity", "0.02247307", "Rate", "0.02269383"],
      
           [ "Quantity", "250.00000000", "Rate", "0.02264279"],
       
           [ "Quantity", "2.90256157", "Rate", "0.02264278"],
        
           [ "Quantity", "3.27764356", "Rate", "0.02253645"],
        
           [ "Quantity", "2.50000000", "Rate", "0.02251229"],
       
           [ "Quantity", "1.80990560", "Rate", "0.02251195"],
        
           [ "Quantity", "0.30000000", "Rate", "0.02249989"],
        
           [ "Quantity", "0.22280280", "Rate", "0.02244137"],          
        
           [ "Quantity", "3.00000046", "Rate", "0.02282093"],
        
           [ "Quantity", "4.27014059", "Rate", "0.02282092"],
        
           [ "Quantity", "0.02247307", "Rate", "0.02269383"],
      
           [ "Quantity", "250.00000000", "Rate", "0.02264279"],
       
       ]    

    }


   rowGetter(rowIndex) {
     return this.props.rows[rowIndex];
    }


    render(){
        return (
            <div>
            <Table className="table"
                rowHeight={40}
                rowGetter={this.rowGetter.bind(this)}
                rowsCount={this.props.rows.length}
                width={800}
                height={800}
                headerHeight={50}>
                
                <Column 
                  label="Quantity"
                width={200}
                dataKey={1}/>
                  
                <Column
                  label="Rate"
                width={200}
                dataKey={3}/>
                
          </Table>

          </div>
            )
    }
}


React.render(<MyDataTable />, document.querySelector('.container')
);











