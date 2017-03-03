export connect(store) {
  return function(target) {
    target.defaultProps = Object.assign(target.defaultProps, { store } );
  }
}