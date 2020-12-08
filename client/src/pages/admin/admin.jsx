import styles from "./admin.module.scss";
import { Table, Tag, Space } from "antd";
import { Link } from "react-router-dom";
import { Statistic, Card, Divider, List, Typography } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined, LikeOutlined } from "@ant-design/icons";

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <Link>{text}</Link>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <Link>Invite {record.name}</Link>
        <Link>Delete</Link>
      </Space>
    ),
  },
];

const list = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

export function Admin() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Administration</h2>

        <h5>Statistics</h5>
        <Divider orientation="left" style={{ margin: "0 0 15px" }}></Divider>

        <div className={styles.kpi}>
          <Card style={{ margin: "0 15px" }}>
            <Statistic
              title="Active"
              value={11.28}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
          <Card style={{ margin: "0 15px" }}>
            <Statistic
              title="Idle"
              value={9.3}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
          <Card style={{ margin: "0 15px" }}>
            <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
          </Card>
          <Card style={{ margin: "0 15px" }}>
            <Statistic title="Unmerged" value={93} suffix="/ 100" />
          </Card>
        </div>

        <h5>Users</h5>
        <Divider orientation="left" style={{ margin: "0 0 15px" }}></Divider>
        <div className={styles.users}>
          <Table columns={columns} dataSource={data} />
        </div>

        <h5>Reviews</h5>
        <Divider orientation="left" style={{ margin: "0 0 15px" }}></Divider>
        <div className={styles.reviews}>
          <List
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={list}
            renderItem={(item) => (
              <List.Item>
                <Typography.Text mark>[ITEM]</Typography.Text> {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
}
