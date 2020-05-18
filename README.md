# Github Split-By Action

Actions splits strings by the given delimiter

## Inputs
### `string`
**required** string to be split
### `split-by`
**required** string/char to be used as the delimiter to split the string.

## Output
### value 
Object containing key value pairs
```json
{
    _0: 'first',
    _1: 'secound'
}
```

## Example Usage

```yml
- uses: rishabhgupta/split-by@v1
  id: split
  with:
    string: 'feat/branch-name'
    split-by: '/'
- run: | 
    echo "${{ steps.split.outputs._1}}"
  ```