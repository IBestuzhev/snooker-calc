import * as React from 'react';

type cb<Elem> = (m: Elem) => void
export class Bundle<Elem> extends React.Component<{load: (cb: cb<Elem>) => void, children: (m: Elem) => any, showLoader?: boolean}, {mod?: Elem}> {
    state: {mod: any} = {
      // short for "module" but that's a keyword in js, so "mod"
      mod: null
    }
  
    componentWillMount() {
      this.load(this.props)
    }
  
    componentWillReceiveProps(nextProps: any) {
      if (nextProps.load !== this.props.load) {
        this.load(nextProps)
      }
    }
  
    load(props: any) {
      this.setState({
        mod: null
      })
      props.load((mod: any) => {
        this.setState({
          // handle both es imports and cjs
          mod: mod.default ? mod.default : mod
        })
      })
    }
  
    render() {
      if (this.props.showLoader) {
        return this.props.children(this.state.mod);
      }
      return this.state.mod ? this.props.children(this.state.mod) : null
    }
  }
  
  export default Bundle