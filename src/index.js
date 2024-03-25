export default results => results.map(({ output }) => output && output.trim()).join(`\0`)
