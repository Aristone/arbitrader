"use strict";

// // es5 polyfills, powered by es5-shim
require("es5-shim")
// // es6 polyfills, powered by babel
require("babel/register")
require("jquery")

// import {SelectComponent} from './r-select.js'

var Promise = require('es6-promise').Promise,
    Backbone = require('backbone'),
    React = require('react'),  
    cryptsy_url = `http://pubapi.cryptsy.com/api.php?`,
    cryptsymkt_url = (id1) => `${cryptsy_url}&method=singleorderdata&marketid=${id1}`,
    bittrex_url = `https://bittrex.com/api/v1.1/public/`,
    bittrexmkt_url = (id2) => `${bittrex_url}getorderbook?market=${id2}&type=both&depth=10`,
    poloniex_url = `https://poloniex.com/public?`,
    poloniexmkt_url = (id3) => `${poloniex_url}command=returnOrderBook&currencyPair=${id3}&depth=10`
        




        console.log(
            cryptsymkt_url(2),
            cryptsymkt_url(3),
            bittrexmkt_url('BTC-LTC'),
            bittrexmkt_url('BTC-NXT'),
            poloniexmkt_url('BTC_NXT'),
            poloniexmkt_url('BTC_XMR')
            )
     
   //http://poloniex.com/public?command=returnOrderBook&currencyPair=BTC_XMR&depth=10
    //https://poloniex.com/public?command=returnOrderBook&currencyPair=BTC_NXT&depth=50


//command=returnOrderBook&currencyPair=BTC_NXT&depth=50<----poloniex
//method=singleorderdata&marketid=2<--- cryptsy
//getorderbook?market=BTC-LTC&type=both&depth=50'<---bittrex

// console.log(cryptsy_url)
// import {SelectComponent} from './r-select.js' 

var React = require('react');
var FixedDataTable = require('fixed-data-table');

var Table = FixedDataTable.Table;
var Column = FixedDataTable.Column;
var ColumnGroup = FixedDataTable.ColumnGroup;


// React.createClass({
//   propTypes: {}
// })


export class MyDataTable extends React.Component{
    constructor(props){
        super(props)
        this.props.rows = [

           [ "Quantity", "3.00000046", "Rate", "0.02282093", "Rate", "0.02282093" ],
        
           [ "Quantity", "4.27014059", "Rate", "0.02282092", "Rate", "0.02282092" ],
        
           [ "Quantity", "0.02247307", "Rate", "0.02269383", "Rate", "0.02269383" ],
      
           [ "Quantity", "250.00000000", "Rate", "0.02264279", "Rate", "0.02264279" ],
       
           [ "Quantity", "2.90256157", "Rate", "0.02264278", "Rate", "0.02264278" ],
        
           [ "Quantity", "3.27764356", "Rate", "0.02253645", "Rate", "0.02253645" ],
        
           [ "Quantity", "2.50000000", "Rate", "0.02251229", "Rate", "0.02251229" ],
       
           [ "Quantity", "1.80990560", "Rate", "0.02251195", "Rate", "0.02251195" ],
        
           [ "Quantity", "0.30000000", "Rate", "0.02249989", "Rate", "0.02249989" ],
        
           [ "Quantity", "0.22280280", "Rate", "0.02244137", "Rate", "0.02244137" ],          
        
           [ "Quantity", "3.00000046", "Rate", "0.02282093", "Rate", "0.02282093" ],
        
           [ "Quantity", "4.27014059", "Rate", "0.02282092" ,"Rate", "0.02282092" ],
        
           [ "Quantity", "0.02247307", "Rate", "0.02269383" ,"Rate", "0.02269383" ],
      
           [ "Quantity", "250.00000000", "Rate", "0.02264279", "Rate", "0.02264279" ],
       
       ]    

    }


   rowGetter(rowIndex) {
     return this.props.rows[rowIndex];
    }


    render(){
        console.log(this.props.rows)
        return (
            <div>
            <Table 
                groupHeaderHeight={40}
                rowHeight={40}
                rowGetter={this.rowGetter.bind(this)}
                rowsCount={this.props.rows.length}
                width={1800}
                height={800}
                headerHeight={50}>
                 
       <ColumnGroup
                   fixed={true}
                   label="Bittrex">
                <Column 
                  label="Quantity"
                  width={200}
                  dataKey={1}/>
                  
                <Column
                  label="Rate"
                  width={200}
                  dataKey={3}/>
                </ColumnGroup>
               
                <ColumnGroup
                  fixed={true}
                  label="Cryptsy">

                <Column 
                  label="Quantity"
                  width={200}
                  dataKey={1}/>
                  
                <Column
                  label="Rate"
                  width={200}
                  dataKey={3}/>
                </ColumnGroup>
                
                <ColumnGroup
                   fixed={true}
                   label="Poloniex">
                <Column 
                  label="Quantity"
                  width={200}
                  dataKey={1}/>
                  
                <Column
                  label="Rate"
                  width={200}
                  dataKey={3}/>
                </ColumnGroup>
                
                
                
          </Table>

          </div>
            )
    }
}


React.render(<MyDataTable />, document.querySelector('.container')
);











