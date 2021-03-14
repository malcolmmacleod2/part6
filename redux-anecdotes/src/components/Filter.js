import React from 'react'
import { setFilter } from '../reducers/filterReducer'
import { connect } from 'react-redux'

const Filter = (props) => {

  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    props.setFilter(event.target.value)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = {
  setFilter
}

const mapStateToProps = (state) => {
return {
    filter: state.filter
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)