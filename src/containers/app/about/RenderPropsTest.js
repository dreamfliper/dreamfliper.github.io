const RenderPropsTest = ({children, ...props}) =>  children({message:"Yes it's me",...props})

export default RenderPropsTest