import React from "react";
import { useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import { organizationUsersSlice, UserRole } from "../../store/reducers/organizationUsersSlice";
import { FilterUsers } from "../FilterUsers/FilterUsers";
import Input from "../Input/Input";
import Select from "../Select/Select";
import styles from "./OrganizationUsers.module.scss";

export const OrganizationUsers = () => {
  const users = useAppSelector((state) => state.organizationUsersReduser.users);

  const svgs = {
    gear: (
      <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.4606 7.088C10.4846 6.896 10.5026 6.704 10.5026 6.5C10.5026 6.296 10.4846 6.104 10.4606 5.912L11.7266 4.922C11.8406 4.832 11.8706 4.67 11.7986 4.538L10.5986 2.462C10.5266 2.33 10.3646 2.282 10.2326 2.33L8.73861 2.93C8.42661 2.69 8.09061 2.492 7.72461 2.342L7.49661 0.752C7.47861 0.608 7.35261 0.5 7.20261 0.5H4.80261C4.65261 0.5 4.52661 0.608 4.50861 0.752L4.28061 2.342C3.91461 2.492 3.57861 2.696 3.26661 2.93L1.77261 2.33C1.63461 2.276 1.47861 2.33 1.40661 2.462L0.206607 4.538C0.128607 4.67 0.164608 4.832 0.278608 4.922L1.54461 5.912C1.52061 6.104 1.50261 6.302 1.50261 6.5C1.50261 6.698 1.52061 6.896 1.54461 7.088L0.278608 8.078C0.164608 8.168 0.134607 8.33 0.206607 8.462L1.40661 10.538C1.47861 10.67 1.64061 10.718 1.77261 10.67L3.26661 10.07C3.57861 10.31 3.91461 10.508 4.28061 10.658L4.50861 12.248C4.52661 12.392 4.65261 12.5 4.80261 12.5H7.20261C7.35261 12.5 7.47861 12.392 7.49661 12.248L7.72461 10.658C8.09061 10.508 8.42661 10.304 8.73861 10.07L10.2326 10.67C10.3706 10.724 10.5266 10.67 10.5986 10.538L11.7986 8.462C11.8706 8.33 11.8406 8.168 11.7266 8.078L10.4606 7.088ZM6.00261 8.6C4.84461 8.6 3.90261 7.658 3.90261 6.5C3.90261 5.342 4.84461 4.4 6.00261 4.4C7.16061 4.4 8.10261 5.342 8.10261 6.5C8.10261 7.658 7.16061 8.6 6.00261 8.6Z"
          fill="#00395C"
          fillOpacity="0.8"
        />
      </svg>
    ),
    checkmark: (
      <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.03997 7.91736L1.36507 4.57938L0.0203476 6.05982L5.23499 10.7964L12.9742 1.57317L11.4421 0.287598L5.03997 7.91736Z"
          fill="white"
        />
      </svg>
    ),
    filter: (
      <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 0H0V1.2759C0 1.74377 0.164032 2.19684 0.463557 2.55627L4.53644 7.44373C4.83597 7.80316 5 8.25623 5 8.7241V13L7 12V8.7241C7 8.25623 7.16403 7.80316 7.46356 7.44373L11.5364 2.55627C11.836 2.19684 12 1.74377 12 1.2759V0Z"
          fill="#00395C"
          fillOpacity="0.8"
        />
      </svg>
    ),
    sort: (
      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H12V2H0V0Z" fill="#00395C" fillOpacity="0.8" />
        <path d="M0 8H8V10H0V8Z" fill="#00395C" fillOpacity="0.8" />
        <path d="M4 4H0V6H4V4Z" fill="#00395C" fillOpacity="0.8" />
      </svg>
    ),
  };

  const [showFilter, setShowFilter] = useState(false);
  const [usersFilter, setUsersFilter] = useState("");
  function filterInputCallback(value: string) {
    setUsersFilter(value);
  }

  let userRowKey = 0;

  return (
    <div className={styles.OrganizationUsers}>
      <div className={styles.mainBlock}>
        <div className={styles.findUser}>
          <Input id={"input_findUser"} labelText={"Найти пользователя"}></Input>
          <button className={styles.findUser__button}>Найти</button>
        </div>
        <div className={styles.tableContainer}>
          <h3 className={styles.tableTitle}>Пользователи</h3>
          <table className={styles.table}>
            <thead className={styles.table__head}>
              <tr>
                <th className={[styles.th, styles.th__fio].join(" ")}>
                  <p>ФИО</p>
                  <div className={styles.tableButtons}>
                    <div className={[styles.tableButton, styles.sortButton].join(" ")}>{svgs.sort}</div>
                    <div
                      className={[styles.tableButton, styles.filterButton].join(" ")}
                      onClick={(e) => {
                        setShowFilter(!showFilter);
                      }}
                    >
                      {svgs.filter}
                    </div>
                    {showFilter ? (
                      <FilterUsers
                        users={users.filter((user) => user.fio.includes(usersFilter) && usersFilter.length > 0)}
                        inputCallback={filterInputCallback}
                      ></FilterUsers>
                    ) : (
                      <></>
                    )}
                  </div>
                </th>
                <th className={[styles.th, styles.th__role].join(" ")}>Роль</th>
                <th className={[styles.th, styles.th__email].join(" ")}>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr className={styles.rowUser} key={`user_row_${userRowKey++}`}>
                  <td>
                    <div className={styles.rowCellContent}>{user.fio}</div>
                  </td>
                  <td>
                    <div className={styles.rowCellContent}>{user.role}</div>
                  </td>
                  <td>
                    <div className={styles.rowCellContent}>
                      {user.email}
                      <div className={styles.userOptions}>{svgs.gear}</div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.addUserBlock}>
        <h3 className={styles.addUser__title}>Данные пользователя</h3>
        <div className={styles.inputs}>
          <Input id={"addUser_fio"} labelText={"Фамилия Имя Отчество:"}></Input>
          <Input id={"addUser_email"} labelText={"E-mail:"}></Input>
          <Select
            id={"addUser_role"}
            labelText={"Роль:"}
            options={(Object.keys(UserRole) as Array<keyof typeof UserRole>).map((key) => ({ value: key, name: UserRole[key] }))}
          ></Select>
        </div>
        <div className={styles.buttons}>
          <button className={[styles.button, styles.button__cancel].join(" ")}>Отмена</button>
          <button className={[styles.button, styles.button__add].join(" ")}>Добавить{svgs.checkmark}</button>
        </div>
      </div>
    </div>
  );
};

export default OrganizationUsers;
