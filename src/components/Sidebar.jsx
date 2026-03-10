import React from "react";

const Sidebar = () => {
  const menuItems = [
    { icon: "🔍", label: "검색", count: null }, // 새롭게 추가된 검색 기능
    { icon: "📥", label: "관리함", count: 2, active: true },
    { icon: "📅", label: "오늘", count: null },
    { icon: "🗓️", label: "다음", count: null },
    { icon: "🔍", label: "필터 & 라벨", count: null },
    { icon: "✅", label: "완료한 작업", count: null },
  ];

  return (
    <aside className="sidebar">
      {/* 사용자 프로필 영역 */}
      <div className="user-profile">
        <div className="avatar">성진</div>
        <span>박성진</span>
      </div>

      {/* 작업 추가 버튼 */}
      <button className="add-task-btn">
        <span className="plus-icon">+</span> 작업 추가
      </button>

      {/* 메뉴 리스트 (검색 포함) */}
      <nav className="menu-list">
        {menuItems.map((item, idx) => (
          <div
            key={idx}
            className={`menu-item ${item.active ? "active" : ""} ${item.label === "검색" ? "search-item" : ""}`}
          >
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
            {item.count !== null && <span className="count">{item.count}</span>}
          </div>
        ))}
      </nav>

      {/* 프로젝트 섹션 */}
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
          padding: 20px 15px;
          height: 100vh;
          box-sizing: border-box;
        }

        .user-profile {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 25px;
          font-weight: 600;
          font-size: 15px;
          padding-left: 5px;
        }

        .avatar {
          width: 26px;
          height: 26px;
          background: #692991;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
        }

        .add-task-btn {
          width: 100%;
          border: none;
          background: none;
          color: #db4c3f;
          text-align: left;
          padding: 10px 5px;
          font-weight: 700;
          cursor: pointer;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .plus-icon {
          font-size: 18px;
        }

        .menu-list {
          margin-top: 5px;
        }

        .menu-item {
          display: flex;
          align-items: center;
          padding: 8px 10px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 14px;
          color: #333;
          margin-bottom: 2px;
        }

        .menu-item:hover {
          background-color: #eeeeee;
        }

        .menu-item.active {
          background: #ffefe5;
          color: #db4c3f;
          font-weight: 500;
        }

        .menu-item .icon {
          width: 24px;
          display: flex;
          justify-content: center;
          font-size: 16px;
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
          font-weight: 600;
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
