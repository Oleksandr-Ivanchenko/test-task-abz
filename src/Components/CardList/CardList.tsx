import React, { useEffect, useState, FC, Fragment } from 'react';
import { getUsers } from '../../api/UsersService';
import { Button } from '../Button';
import { Card } from '../Card/Card';
import './style.scss';
import { setErrorAction } from '../../store/actions';
import { useDispatch } from 'react-redux';

export const CardList: FC = () => {
  const dispatch = useDispatch();
  const [userList, setUserList] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    getUsers(pageCount).then((result) => {
      setUserList([
        ...userList,
        ...result.users,
      ])
      setTotalPages(result.total_pages)
    }).catch((error) => {
      dispatch(setErrorAction(error.message));
    });
  },[pageCount]);

  const onShowMore = () => {
    setPageCount(pageCount + 1)
  }

  return (
    <section className='userList' id='users'>
      <h1 className='userList__title'>
        Working with GET request
      </h1>
      <div className='userList__content'>
        {userList.map( user => (
          <Fragment key={user.id+user.name}>
            <Card 
              email={user.email}
              id={user.id}
              name={user.name}
              phone={user.phone}
              photo={user.photo}
              position={user.position}
            />
          </Fragment>
        ))}
      </div>
      <div className={pageCount === totalPages 
        ? 'userList__button userList__button--hidden' 
        : 'userList__button'
      }>
        <Button 
          label="Show more" 
          onClick={onShowMore}
          width={'120px'}
        />
      </div>
    </section>
  )
}