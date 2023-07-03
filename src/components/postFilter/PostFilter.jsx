import React from "react";
import MySelect from "../UI/select/MySelect";
import MyInput from "../UI/input/MyInput";

const PostFilter = ({filter, setFilter}) => {

  
    return(
        <div>
        <MyInput
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
          placeholder='Поиск...'
        />
        <MySelect
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          options={[
            {value: 'body', name: 'По описанию'},
            {value: 'title', name: 'По заголовку'},
          ]}
          defaultValue="Сортировка"
        />
      </div>
    );
}

export default PostFilter;