import React from "react";

const Sidebar = () => {
  const menuItems = [
    { icon: "📥", label: "관리함", count: 2, active: true },
    { icon: "📅", label: "오늘", count: null },
    { icon: "🗓️", label: "다음", count: null },
    { icon: "🔍", label: "필터 & 라벨", count: null },
    { icon: "✅", label: "완료한 작업", count: null },
  ];

  return (
    <aside className="sidebar">
      <div className="user-profile">
        <div className="avatar">성진</div>
        <span>박성진</span>
      </div>
      <button className="add-task-btn">+ 작업 추가</button>
      <nav className="menu-list">
        {menuItems.map((item, idx) => (
          <div key={idx} className={`menu-item ${item.active ? "active" : ""}`}>
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
            {item.count && <span className="count">{item.count}</span>}
          </div>
        ))}
      </nav>
      <div className="project-section">
        <h3>프로젝트</h3>
        <div className="menu-item">
          <span className="icon">#</span>
          <span className="label">시작하기 👋</span>
          <span className="count">13</span>
        </div>
      </div>
      <style jsx="true">{`
        .sidebar {
          width: 280px;
          background: #fafafa;
          border-right: 1px solid #f0f0f0;
          padding: 20px;
        }
        .user-profile {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          font-weight: 600;
        }
        .avatar {
          width: 24px;
          height: 24px;
          background: #692991;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
        }
        .add-task-btn {
          width: 100%;
          border: none;
          background: none;
          color: #db4c3f;
          text-align: left;
          padding: 8px;
          font-weight: bold;
          cursor: pointer;
          font-size: 14px;
        }
        .menu-list {
          margin-top: 10px;
        }
        .menu-item {
          display: flex;
          align-items: center;
          padding: 10px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 14px;
        }
        .menu-item.active {
          background: #ffefe5;
          color: #db4c3f;
        }
        .menu-item .label {
          flex: 1;
          margin-left: 10px;
        }
        .menu-item .count {
          color: #aaa;
          font-size: 12px;
        }
        .project-section h3 {
          font-size: 12px;
          color: #666;
          margin: 30px 0 10px 10px;
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
