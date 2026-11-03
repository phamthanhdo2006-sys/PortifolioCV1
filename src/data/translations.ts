import type { SkillCategory, GalleryItem } from '../types';

export interface Translations {
  navbar: {
    about: string;
    skills: string;
    gallery: string;
    hobbies: string;
    contact: string;
    studentCard: string;
    connect: string;
    profileBadge: string;
    quickContact: string;
    drawerTag: string;
    themeLight: string;
    themeDark: string;
  };
  hero: {
    statusBadge: string;
    greeting: string;
    name: string;
    role: string;
    tagline: string;
    exploreProjects: string;
    exploreHobbies: string;
    exploreGallery: string;
    studentCard: string;
    scrollDown: string;
    profileCard: {
      tag: string;
      majorInfo: string;
      sub: string;
      stat1Val: string;
      stat1Label: string;
      stat2Val: string;
      stat2Label: string;
      stat3Val: string;
      stat3Label: string;
      hashtags: string[];
    };
  };
  about: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    narrativeTitle: string;
    narrativeSub: string;
    bioCards: {
      title: string;
      content: string;
    }[];
    bentoHeader: string;
    bentoSub: string;
    bentoCards: {
      id: string;
      title: string;
      subtitle: string;
      description: string;
      badge: string;
      subBadge?: string;
      statusBadge?: string;
      githubUrl?: string;
      githubLabel?: string;
      highlightsHeader: string;
      highlights: string[];
      tags: string[];
    }[];
  };
  skills: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    filterAll: string;
    filterLanguages: string;
    filterBackend: string;
    filterTools: string;
    activeStatus: string;
    readyStatus: string;
    showAllSkills: string;
    collapseSkills: string;
    categories: SkillCategory[];
  };
  gallery: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    filterAll: string;
    hint: string;
    closeLightbox: string;
    locationLabel: string;
    dateLabel: string;
    items: GalleryItem[];
  };
  hobbies: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    viewGrid: string;
    viewCarousel: string;
    viewStack: string;
    exploreDetail: string;
    backBtn: string;
    nextStackCard: string;
    prevStackCard: string;
    stackHint: string;
    activeCardBadge: string;
    deckCounter: string;
    items: {
      id: string;
      title: string;
      subtitle: string;
      story: string;
      quote: string;
      tags: string[];
      stats: { label: string; value: string }[];
    }[];
  };
  contact: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    emailTitle: string;
    copySuccess: string;
    copyTooltip: string;
    universityTitle: string;
    universityDesc: string;
    locationTitle: string;
    locationDesc: string;
    form: {
      title: string;
      sub: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      sendingBtn: string;
      sentSuccess: string;
    };
    socialsTitle: string;
    rights: string;
    backToTop: string;
    studentCardLink: string;
  };
  modal: {
    badge: string;
    title: string;
    subtitle: string;
    fullName: string;
    studentId: string;
    classGroup: string;
    university: string;
    major: string;
    academicYear: string;
    instructor: string;
    submissionDate: string;
    courseName: string;
    courseCode: string;
    verifiedBadge: string;
    closeBtn: string;
  };
}

export const TRANSLATIONS: Record<'vi' | 'en', Translations> = {
  vi: {
    navbar: {
      about: "Giới Thiệu",
      skills: "Kỹ Năng & Công Nghệ",
      gallery: "Khoảnh Khắc",
      hobbies: "Sở Thích & Đời Sống",
      contact: "Liên Hệ",
      studentCard: "Thông Tin Sinh Viên",
      connect: "Liên Hệ",
      profileBadge: "Smart Logistics & IT",
      quickContact: "Liên hệ nhanh",
      drawerTag: "HỒ SƠ PHẠM THÀNH ĐÔ",
      themeLight: "Chế độ Sáng",
      themeDark: "Chế độ Tối",
    },
    hero: {
      statusBadge: "Sẵn sàng kết nối dự án Smart Logistics & Web",
      greeting: "Xin chào, mình là",
      name: "Phạm Thành Đô",
      role: "Sinh viên CNTT — Chuyên ngành Logistics Thông minh (UTH)",
      tagline: "Sinh viên CNTT định hướng Smart Logistics, kết hợp tư duy tối ưu vận tải với kỹ năng phát triển phần mềm hiện đại.",
      exploreProjects: "Xem Dự Án & Hồ Sơ",
      exploreHobbies: "Khám Phá Sở Thích",
      exploreGallery: "Bộ Sưu Tập Ảnh",
      studentCard: "Thẻ Sinh Viên",
      scrollDown: "Cuộn xuống khám phá",
      profileCard: {
        tag: "THẺ ĐỊNH DANH SINH VIÊN",
        majorInfo: "CNTT — Logistics Thông Minh",
        sub: "Trường Đại học Giao thông Vận tải TP.HCM (UTH)",
        stat1Val: "Năm 3",
        stat1Label: "Khóa học",
        stat2Val: "087206007835",
        stat2Label: "Mã số sinh viên",
        stat3Val: "SmartLog & FilmLab",
        stat3Label: "Dự án tiêu biểu",
        hashtags: ["#SmartLogistics", "#FullStack", "#FilmLabConnect", "#UTH"],
      },
    },
    about: {
      badge: "HỒ SƠ CÁ NHÂN & DỰ ÁN",
      titlePrefix: "Câu Chuyện &",
      titleHighlight: "Đồ Án Tiêu Biểu",
      subtitle: "Hành trình học tập và tích lũy kinh nghiệm của sinh viên CNTT — từ những dòng mã đầu tiên đến các đồ án về Smart Logistics và ứng dụng web thực tế.",
      narrativeTitle: "Định Hướng Học Tập & Mục Tiêu Nghề Nghiệp",
      narrativeSub: "Tóm tắt quá trình học tập, lối sống và định hướng phát triển",
      bioCards: [
        {
          title: "Học Vấn & Chuyên Ngành Smart Logistics",
          content: "Là sinh viên năm 3 chuyên ngành <strong>Logistics Thông minh</strong> tại UTH, mình tập trung nghiên cứu ứng dụng phần mềm vào bài toán vận tải thực tế: mô phỏng lộ trình xe, quản lý hàng hóa và hiển thị dữ liệu trực quan trên bản đồ."
        },
        {
          title: "Lối Sống Lành Mạnh & Cân Bằng",
          content: "Rèn luyện thể lực và phản xạ qua những trận <strong>cầu lông</strong> mỗi chiều, tìm lại sự thư thái với những chuyến <strong>cắm trại và câu cá</strong> tại Hồ Trị An, Nam Cát Tiên, và giải trí lành mạnh cùng bạn bè trên chiếc laptop <strong>Lenovo LOQ</strong>."
        },
        {
          title: "Định Hướng Nghề Nghiệp & Trách Nhiệm",
          content: "Mục tiêu của mình là trở thành <strong>Kỹ sư Phần mềm Full-Stack</strong> có chuyên môn vững vàng. Chú trọng viết mã nguồn rõ ràng, tôn trọng người dùng và luôn giữ tinh thần trách nhiệm trong công việc."
        }
      ],
      bentoHeader: "Năng Lực Kỹ Thuật & Các Đồ Án Tiêu Biểu",
      bentoSub: "BENTO GRID • SMART LOGISTICS & IT SHOWCASE",
      bentoCards: [
        {
          id: "card-filmlab",
          title: "Nền Tảng Dịch Vụ Tráng Rửa & Quét Phim",
          subtitle: "FilmLab Connect — Nền tảng kết nối người chụp ảnh phim với MiniLab",
          description: "Hệ thống hỗ trợ số hóa quy trình cho tiệm phim: tiếp nhận đơn hàng, cập nhật tiến độ tráng/scan theo thời gian thực, lưu trữ ảnh chất lượng cao và thanh toán tiện lợi.",
          badge: "Đồ Án Tiêu Biểu",
          subBadge: "Web & Mobile App",
          statusBadge: "Đang thực hiện",
          githubUrl: "https://github.com/huylamnhat/Photographer-enthusiastic-environment",
          githubLabel: "Xem Mã Nguồn",
          highlightsHeader: "ĐẶC TẢ KỸ THUẬT & TÍNH NĂNG",
          highlights: [
            "Phát triển ứng dụng Web & Di động bằng Flutter với giao diện thân thiện, dễ sử dụng.",
            "Backend & Database: Node.js/Express REST API kết nối cơ sở dữ liệu Microsoft SQL Server.",
            "Quy trình CI/CD: Thiết lập GitHub Actions tự động kiểm thử và đóng gói sản phẩm.",
            "Tính năng thực tế: Quản lý cuộn phim theo mã vạch, phân quyền tài khoản và lưu trữ ảnh số."
          ],
          tags: ["Flutter", "Node.js", "SQL Server", "GitHub Actions"]
        },
        {
          id: "card-logistics",
          title: "Chuyên Ngành Smart Logistics",
          subtitle: "Đại học Giao Thông Vận Tải TP.HCM (UTH)",
          description: "Chương trình đào tạo chính quy kết hợp nền tảng Công nghệ thông tin với kiến thức quản lý chuỗi cung ứng và vận tải hiện đại.",
          badge: "Chuyên Ngành Đào Tạo",
          highlightsHeader: "THÔNG TIN ĐÀO TẠO",
          highlights: [
            "Khoa Công nghệ Thông tin — Trường ĐH Giao thông Vận tải TP.HCM (UTH).",
            "Môn học định hướng: Lập trình Web, Hệ thống Logistics Thông minh, Cơ sở dữ liệu.",
            "Tư duy tối ưu: Áp dụng thuật toán vào gom hàng, xếp dỡ và chọn lộ trình vận chuyển."
          ],
          tags: ["Smart Logistics", "UTH", "Supply Chain"]
        },
        {
          id: "card-smartlog",
          title: "Hệ Thống Giám Sát Vận Tải SmartLog",
          subtitle: "Theo dõi hành trình xe và thông số kho bãi theo thời gian thực",
          description: "Ứng dụng web phục vụ theo dõi luồng phương tiện vận chuyển trên bản đồ số Leaflet, thử nghiệm thuật toán tìm đường ngắn nhất và cảnh báo trạng thái kho bãi.",
          badge: "Đồ Án Học Tập",
          subBadge: "Thực Nghiệm",
          highlightsHeader: "TÍNH NĂNG CHÍNH",
          highlights: [
            "Bản đồ tương tác: Theo dõi vị trí và lộ trình của đội xe theo thời gian thực.",
            "Thuật toán định tuyến: Gợi ý tuyến đường ngắn nhất nhằm tiết kiệm nhiên liệu.",
            "Giám sát kho bãi: Hiển thị trạng thái nhiệt độ hàng hóa và sức chứa pallet theo thời gian thực."
          ],
          tags: ["React", "TypeScript", "Leaflet", "GPS Tracking"]
        },
        {
          id: "card-finflow",
          title: "FinFlow & Đồ Án Cơ Sở Dữ Liệu",
          subtitle: "Quản lý chi tiêu cá nhân & thực hành thuật toán cấu trúc dữ liệu",
          description: "Ứng dụng quản lý thu chi cá nhân kết hợp thực hành các thuật toán cấu trúc dữ liệu kinh điển (Cây AVL, Dijkstra, chuẩn hóa cơ sở dữ liệu quan hệ).",
          badge: "Đồ Án Môn Học",
          highlightsHeader: "NỀN TẢNG KỸ THUẬT",
          highlights: [
            "Thống kê chi tiêu: Biểu đồ thu chi trực quan theo tuần và theo tháng.",
            "Cấu trúc dữ liệu: Ứng dụng giải thuật đồ thị và cây tìm kiếm nhị phân vào xử lý dữ liệu.",
            "Cơ sở dữ liệu quan hệ: Thiết kế chuẩn hóa tránh dư thừa và tăng tốc truy vấn."
          ],
          tags: ["Data Structures", "Algorithms", "Chart.js", "SQL"]
        },
        {
          id: "card-philosophy",
          title: "Phương Châm Học Tập & Làm Việc",
          subtitle: "Chủ động, kiên trì và không ngừng hoàn thiện",
          description: "Mình tin rằng một sản phẩm tốt đến từ sự thấu hiểu nhu cầu người dùng, tính cẩn thận trong từng dòng code và tinh thần hợp tác tích cực cùng bạn bè.",
          badge: "Góc Nhìn Cá Nhân",
          highlightsHeader: "GIÁ TRỊ CỐT LÕI",
          highlights: [
            "Mã nguồn sạch: Viết code dễ đọc, dễ bảo trì và có cấu trúc mạch lạc.",
            "Rèn luyện sự kiên nhẫn: Phản xạ thể thao giúp mình bình tĩnh khi tìm lỗi và giải quyết vấn đề.",
            "Cân bằng cuộc sống: Tái tạo năng lượng từ những buổi chơi thể thao, dã ngoại và âm nhạc."
          ],
          tags: ["Clean Code", "Discipline", "Teamwork"]
        }
      ]
    },
    skills: {
      badge: "KỸ NĂNG & CÔNG CỤ",
      titlePrefix: "Hệ Sinh Thái",
      titleHighlight: "Công Nghệ & Kỹ Thuật",
      subtitle: "Các công nghệ và công cụ mình đã học và ứng dụng trong các đồ án web, ứng dụng di động và cơ sở dữ liệu.",
      filterAll: "Tất cả công nghệ",
      filterLanguages: "Web & Di động",
      filterBackend: "Backend & Dữ liệu",
      filterTools: "Công cụ & Quy trình",
      activeStatus: "Đang ứng dụng",
      readyStatus: "Sẵn sàng dự án",
      showAllSkills: "Xem toàn bộ kỹ năng",
      collapseSkills: "Thu gọn danh sách",
      categories: [
        {
          categoryTitle: "Phát Triển Web & Di Động",
          categoryDesc: "Các công nghệ mình đã học và ứng dụng để xây dựng giao diện web, ứng dụng di động đa nền tảng.",
          skills: [
            { name: "React", icon: "Code2", level: "Thành thạo", experience: "Kiến trúc component, Custom Hooks, State management", featured: true },
            { name: "Flutter", icon: "Flame", level: "Ứng dụng tốt", experience: "Xây dựng Web & Mobile App cho dự án FilmLab Connect", featured: true },
            { name: "TypeScript", icon: "FileCode2", level: "Thành thạo", experience: "Strict type safety, Generics, Interface contract", featured: true },
            { name: "Tailwind CSS", icon: "Palette", level: "Thành thạo", experience: "Design tokens, Responsive layout, Dark/Light theming", featured: true },
            { name: "JavaScript (ES6+)", icon: "FileJson", level: "Thành thạo", experience: "Async/await, Event Loop, DOM manipulation", featured: true },
            { name: "Next.js", icon: "Layers", level: "Cơ bản", experience: "Server components, App Router, Static export", featured: false },
            { name: "HTML5 / Modern CSS", icon: "Layout", level: "Thành thạo", experience: "Semantic markup, CSS Grid, Flexbox, Accessible UI", featured: false },
            { name: "Framer Motion", icon: "Sparkles", level: "Khá", experience: "Spring physics, micro-interactions, layout animations", featured: true },
          ]
        },
        {
          categoryTitle: "Hệ Thống Backend & Dữ Liệu",
          categoryDesc: "Nền tảng thiết kế RESTful API, thiết kế cơ sở dữ liệu quan hệ và tối ưu truy vấn.",
          skills: [
            { name: "Microsoft SQL Server", icon: "Database", level: "Thành thạo", experience: "Thiết kế schema chuẩn hóa, Stored Procedures, T-SQL", featured: true },
            { name: "Node.js & Express", icon: "Server", level: "Khá", experience: "RESTful API, middleware, routing, token authentication", featured: true },
            { name: "C / C++", icon: "Cpu", level: "Cơ bản", experience: "Cấu trúc dữ liệu nâng cao, giải thuật đồ thị & quản lý bộ nhớ", featured: false },
            { name: "Python", icon: "Terminal", level: "Cơ bản", experience: "Xử lý dữ liệu cơ bản, viết script kiểm thử tự động", featured: false },
          ]
        },
        {
          categoryTitle: "Công Cụ & Quy Trình Kỹ Thuật",
          categoryDesc: "Môi trường phát triển trên laptop Lenovo LOQ cùng các công cụ quản lý mã nguồn và kiểm thử.",
          skills: [
            { name: "Git & GitHub", icon: "GitBranch", level: "Thành thạo", experience: "Git flow, PR reviews, merge strategy, issues tracking", featured: true },
            { name: "GitHub Actions", icon: "Zap", level: "Khá", experience: "Thiết lập pipeline CI/CD tự động build & test", featured: true },
            { name: "VS Code & Antigravity", icon: "Code", level: "Thành thạo", experience: "Môi trường code tối ưu năng suất với AI coding assistant", featured: true },
            { name: "Figma", icon: "PenTool", level: "Khá", experience: "UI/UX wireframing, component design, responsive spec", featured: true },
            { name: "Postman", icon: "Send", level: "Khá", experience: "Kiểm thử endpoint API, mock server, kiểm tra payload", featured: false },
            { name: "Vite", icon: "Zap", level: "Thành thạo", experience: "Build tooling tốc độ cao, bundling tối ưu hóa", featured: false },
          ]
        }
      ]
    },
    gallery: {
      badge: "KHOẢNH KHẮC & ĐỜI SỐNG",
      titlePrefix: "Thư Viện Ảnh &",
      titleHighlight: "Đời Sống Thường Ngày",
      subtitle: "Những khoảnh khắc chân thực trong đời sống sinh viên: trekking Nam Cát Tiên, cắm trại bên hồ Trị An, theo dõi diễu binh 30/4 và nét bình dị quê nhà.",
      filterAll: "Tất cả",
      hint: "Nhấp vào ảnh để xem chi tiết và câu chuyện đằng sau mỗi khoảnh khắc",
      closeLightbox: "Đóng (ESC)",
      locationLabel: "Địa điểm",
      dateLabel: "Thời gian",
      items: [
        {
          id: "workspace-setup",
          title: "Góc Học Tập & Lập Trình",
          subtitle: "Laptop Lenovo LOQ và màn hình mở rộng phục vụ học tập",
          location: "Góc học tập cá nhân",
          date: "2025 – 2026",
          image: "./gallery/workspace-pc.jpg",
          aspect: "portrait",
          tag: "Góc học tập",
          categoryKey: "expedition",
          story: "Góc bàn học tập quen thuộc của mình tại phòng trọ. Đây là nơi mình hoàn thành các bài tập lớn, đồ án môn học và nghiên cứu các công nghệ mới."
        },
        {
          id: "coastal-portrait",
          title: "Chân Dung Dã Ngoại",
          subtitle: "Một buổi chiều dạo biển Vũng Tàu",
          location: "Vũng Tàu / Duyên hải miền Nam",
          date: "2025",
          image: "./gallery/coastal-portrait.jpg",
          aspect: "portrait",
          tag: "Chân dung",
          categoryKey: "portrait",
          story: "Chuyến đi đổi gió ngắn ngày cùng bạn bè vào dịp cuối tuần. Không khí thoáng đãng của biển giúp mình nạp lại năng lượng sau những tuần học căng thẳng."
        },
        {
          id: "cat-tien-stream",
          title: "Bên Dòng Suối Nam Cát Tiên",
          subtitle: "Khoảnh khắc dừng chân nghỉ ngơi ven suối đá",
          location: "Vườn Quốc Gia Nam Cát Tiên",
          date: "26/04/2025",
          image: "./gallery/cat-tien-stream.jpg",
          aspect: "portrait",
          tag: "Khám phá",
          categoryKey: "expedition",
          story: "Chuyến trekking khám phá rừng Nam Cát Tiên. Được tận mắt nhìn thấy dòng suối mát và không gian thiên nhiên trong lành là trải nghiệm rất đáng nhớ."
        },
        {
          id: "cat-tien-friends",
          title: "Kỷ Niệm Cùng Bạn Bè Tại Cát Tiên",
          subtitle: "Chụp ảnh lưu niệm trên cây cầu gỗ xuyên rừng",
          location: "Cầu gỗ rừng Nam Cát Tiên",
          date: "26/04/2025",
          image: "./gallery/cat-tien-friends.jpg",
          aspect: "portrait",
          tag: "Tình bạn",
          categoryKey: "friendship",
          story: "Những tiếng cười đùa và sự gắn bó giữa các thành viên trong nhóm suốt hành trình xuyên rừng. Kỷ niệm đáng nhớ thời sinh viên."
        },
        {
          id: "tri-an-sunset",
          title: "Hoàng Hôn Trên Hồ Trị An",
          subtitle: "Buổi chiều cắm trại và buông cần câu cá ven hồ",
          location: "Hồ Trị An, Đồng Nai",
          date: "2025",
          image: "./gallery/tri-an-sunset.jpg",
          aspect: "portrait",
          tag: "Thiên nhiên",
          categoryKey: "heritage",
          story: "Khoảnh khắc ánh ráng chiều buông xuống mặt nước phẳng lặng ở Trị An. Ngồi câu cá ven bờ hồ đem lại cảm giác bình yên và tĩnh tại."
        },
        {
          id: "hilltop-friends",
          title: "Đón Gió Chiều Trên Đỉnh Đồi",
          subtitle: "Cùng bạn bè dừng xe ngắm cảnh thảo nguyên cỏ xanh",
          location: "Đỉnh đồi Trị An",
          date: "26/04/2025",
          image: "./gallery/hilltop-friends.jpg",
          aspect: "landscape",
          tag: "Tuổi trẻ",
          categoryKey: "friendship",
          story: "Sau chặng đường chạy xe máy cùng bạn bè, cả nhóm dừng chân hóng gió trên đỉnh đồi, phóng tầm mắt ngắm thung lũng xanh mướt phía dưới."
        },
        {
          id: "vietnam-parade",
          title: "Theo Dõi Lễ Diễu Binh 30/4",
          subtitle: "Hòa mình cùng người dân TP.HCM trong ngày hội thống nhất",
          location: "TP. Hồ Chí Minh",
          date: "30/04/2025",
          image: "./gallery/vietnam-parade.jpg",
          aspect: "portrait",
          tag: "Tự hào Việt Nam",
          categoryKey: "pride",
          story: "Được hòa vào dòng người theo dõi đoàn diễu binh trong dịp lễ 30/4. Nhìn lá cờ đỏ sao vàng tung bay gợi lên trong mình sự tự hào và lòng biết ơn đối với quê hương."
        },
        {
          id: "heritage-ricefield",
          title: "Về Thăm Miền Tây Quê Hương",
          subtitle: "Chiếc khăn rằn và cánh đồng lúa quê nhà Đồng Tháp",
          location: "Đồng bằng Sông Cửu Long",
          date: "2024",
          image: "./gallery/heritage-ricefield.jpg",
          aspect: "landscape",
          tag: "Bản sắc",
          categoryKey: "heritage",
          story: "Gốc gác ở Đồng Tháp, mỗi lần về quê nhìn cánh đồng lúa trải dài luôn mang lại cho mình cảm giác thân thuộc, mộc mạc và gần gũi."
        },
        {
          id: "graduation-day",
          title: "Ngày Tốt Nghiệp THPT",
          subtitle: "Dấu mốc bước vào giảng đường Đại học UTH",
          location: "Trường THPT",
          date: "2024",
          image: "./gallery/graduation-day.jpg",
          aspect: "portrait",
          tag: "Dấu mốc",
          categoryKey: "portrait",
          story: "Ngày lễ bế giảng và tốt nghiệp cấp ba. Khoảnh khắc đánh dấu sự trưởng thành và chuẩn bị bước vào con đường sinh viên chuyên ngành Smart Logistics tại UTH."
        }
      ]
    },
    hobbies: {
      badge: "PHONG CÁCH SỐNG & ĐAM MÊ",
      titlePrefix: "Sở Thích &",
      titleHighlight: "Năng Lượng Cuộc Sống",
      subtitle: "Những hoạt động giúp rèn luyện thể lực, duy trì sự tập trung và cân bằng tinh thần ngoài giờ học tập.",
      viewGrid: "Dạng Lưới",
      viewCarousel: "Băng Chuyền",
      viewStack: "Xếp Chồng",
      exploreDetail: "Xem câu chuyện chi tiết",
      backBtn: "Quay lại",
      nextStackCard: "Rút thẻ kế tiếp",
      prevStackCard: "Thẻ trước đó",
      stackHint: "Nhấp trực tiếp vào các thẻ xếp phía sau hoặc dùng nút điều hướng để rút thẻ",
      activeCardBadge: "Thẻ Đang Xem",
      deckCounter: "Bộ Thẻ 3D",
      items: [
        {
          id: "badminton",
          title: "Chơi Cầu Lông Mỗi Chiều",
          subtitle: "Rèn luyện thể lực, phản xạ và gắn kết bạn bè",
          story: "Sau những giờ học tập và thực hành trên máy tính, mình thường cùng các bạn ra sân cầu lông vào cuối buổi chiều. Những pha đánh cầu linh hoạt và không khí thi đấu sôi nổi giúp mình giải tỏa căng thẳng, rèn luyện sức bền và giữ tinh thần luôn thoải mái.",
          quote: "Phản xạ nhanh trên sân cầu giúp mình rèn luyện sự bình tĩnh và tập trung khi giải quyết vấn đề kỹ thuật.",
          tags: ["Cầu lông UTH", "Rèn luyện thể lực", "Phản xạ nhanh", "Gắn kết bạn bè", "Giải tỏa căng thẳng"],
          stats: [
            { label: "Tần suất", value: "3–4 buổi/tuần" },
            { label: "Lối chơi", value: "Tấn công linh hoạt" },
            { label: "Lợi ích", value: "Rèn luyện thể lực" }
          ]
        },
        {
          id: "camping-fishing",
          title: "Cắm Trại & Câu Cá Dã Ngoại",
          subtitle: "Hồ Trị An, rừng Nam Cát Tiên và rừng tràm Trà Sư",
          story: "Tạm gác lại bài vở để dựng lều ven hồ Trị An, ngắm hoàng hôn và buông cần câu cá. Cảm giác thư thả chờ cá cắn câu bên mặt nước phẳng lặng, hay những chuyến đi bộ dưới tán cây ở Nam Cát Tiên và rừng tràm Trà Sư giúp mình tìm lại sự tĩnh lặng và tái tạo năng lượng học tập.",
          quote: "Rời xa ồn ào thành thị để hòa mình vào thiên nhiên giúp tâm trí nhẹ nhàng và cân bằng hơn.",
          tags: ["Cắm trại Trị An", "Câu cá giải trí", "Nam Cát Tiên", "Rừng tràm Trà Sư", "Dã ngoại cuối tuần"],
          stats: [
            { label: "Điểm đến", value: "Trị An & Cát Tiên" },
            { label: "Hoạt động", value: "Cắm trại & Thả câu" },
            { label: "Cảm xúc", value: "Bình yên & Tự do" }
          ]
        },
        {
          id: "gaming",
          title: "Gaming & Thư Giãn Chiến Thuật",
          subtitle: "Valorant, Đấu Trường Chân Lý (TFT) và phiêu lưu cùng Stray",
          story: "Những trận đấu súng phối hợp trong Valorant, những ván cờ tính toán bài trong TFT hay trải nghiệm ngắm nhìn thế giới qua góc nhìn chú mèo trong Stray mang lại cho mình những giờ giải trí vui vẻ trên chiếc máy Lenovo LOQ. Trò chơi giúp mình rèn luyện sự bình tĩnh và phối hợp nhịp nhàng với bạn bè.",
          quote: "Giữ sự bình tĩnh, quan sát kỹ tình huống và trao đổi rõ ràng với đồng đội để đạt kết quả tốt nhất.",
          tags: ["Valorant FPS", "TFT Chiến thuật", "Stray Phiêu lưu", "Lenovo LOQ", "Giao tiếp đồng đội"],
          stats: [
            { label: "Thiết bị", value: "Laptop Lenovo LOQ" },
            { label: "Tựa game", value: "Valorant, TFT, Stray" },
            { label: "Phong cách", value: "Chiến thuật nhóm" }
          ]
        },
        {
          id: "music-national",
          title: "Âm Nhạc Truyền Thống & Acoustic",
          subtitle: "Những khúc ca hào hùng của đất nước và giai điệu acoustic mộc mạc",
          story: "Âm nhạc là sở thích không thể thiếu trong cuộc sống của mình. Dịp 30/4 được tận mắt xem đoàn diễu binh, nghe những khúc ca hào hùng về quê hương luôn đem lại cảm giác xúc động và tự hào. Vào những đêm ngồi học và làm đồ án, những bản acoustic guitar hay nhạc không lời nhẹ nhàng lại giúp mình tập trung cao độ.",
          quote: "Âm nhạc mang lại sự tập trung khi học tập và nuôi dưỡng niềm tự hào về đất nước quê hương.",
          tags: ["Nhạc truyền thống", "Tự hào quê hương", "Acoustic Guitar", "Nhạc tập trung học", "Giai điệu mộc mạc"],
          stats: [
            { label: "Thể loại", value: "Hào hùng & Acoustic" },
            { label: "Cảm hứng", value: "Tự hào quê hương" },
            { label: "Kỷ niệm", value: "Lễ diễu binh 30/4" }
          ]
        }
      ]
    },
    contact: {
      badge: "KẾT NỐI & HỢP TÁC",
      titlePrefix: "Gửi Tin Nhắn &",
      titleHighlight: "Kết Nối Ngay",
      subtitle: "Mình luôn sẵn sàng trao đổi về các dự án học tập, công nghệ Smart Logistics hoặc cơ hội thực tập, cộng tác phát triển web.",
      emailTitle: "Hộp thư điện tử chính",
      copySuccess: "Đã sao chép email!",
      copyTooltip: "Sao chép email vào clipboard",
      universityTitle: "Trường Đại học",
      universityDesc: "Đại học Giao Thông Vận Tải TP.HCM (UTH)",
      locationTitle: "Nơi sinh sống",
      locationDesc: "TP. Hồ Chí Minh & Đồng Tháp",
      form: {
        title: "Gửi Tin Nhắn Nhanh",
        sub: "Phản hồi thông thường trong vòng 24 giờ",
        nameLabel: "Họ và tên của bạn",
        namePlaceholder: "Nguyễn Văn A",
        emailLabel: "Địa chỉ Email",
        emailPlaceholder: "example@domain.com",
        messageLabel: "Nội dung tin nhắn",
        messagePlaceholder: "Chào Đô, mình muốn trao đổi về dự án...",
        submitBtn: "Gửi tin nhắn",
        sendingBtn: "Đang gửi...",
        sentSuccess: "Cảm ơn bạn! Tin nhắn đã được gửi thành công.",
      },
      socialsTitle: "Kênh mạng xã hội & mã nguồn",
      rights: "Bản quyền thuộc về Phạm Thành Đô. Đồ án môn học Lập trình Web — Trường ĐH Giao thông Vận tải TP.HCM (UTH).",
      backToTop: "Lên đầu trang",
      studentCardLink: "Xem thông tin sinh viên UTH",
    },
    modal: {
      badge: "HỒ SƠ HỌC VẤN XÁC THỰC",
      title: "Thông Tin Sinh Viên Chính Quy",
      subtitle: "Dữ liệu phục vụ đánh giá đồ án môn Lập trình Web",
      fullName: "Họ và tên sinh viên",
      studentId: "Mã số sinh viên (MSSV)",
      classGroup: "Nhóm đồ án & Lớp",
      university: "Cơ sở đào tạo",
      major: "Chuyên ngành đào tạo",
      academicYear: "Niên khóa học tập",
      instructor: "Giảng viên hướng dẫn",
      submissionDate: "Ngày báo cáo đồ án",
      courseName: "Học phần môn học",
      courseCode: "Mã số học phần",
      verifiedBadge: "Dữ liệu sinh viên UTH chính quy",
      closeBtn: "Đóng cửa sổ",
    }
  },
  en: {
    navbar: {
      about: "About Me",
      skills: "Skills & Tech",
      gallery: "Moments",
      hobbies: "Lifestyle & Passions",
      contact: "Contact",
      studentCard: "Student Card",
      connect: "Get in Touch",
      profileBadge: "Smart Logistics & IT",
      quickContact: "Quick Contact",
      drawerTag: "PHAM THANH DO PROFILE",
      themeLight: "Light Mode",
      themeDark: "Dark Mode",
    },
    hero: {
      statusBadge: "Open to Smart Logistics & Web opportunities",
      greeting: "Hello, I am",
      name: "Pham Thanh Do",
      role: "IT Student — Smart Logistics Major (UTH)",
      tagline: "IT student focusing on Smart Logistics, combining transport optimization logic with modern software engineering skills.",
      exploreProjects: "Explore Projects",
      exploreHobbies: "Discover Hobbies",
      exploreGallery: "Photo Gallery",
      studentCard: "Student Card",
      scrollDown: "Scroll to explore",
      profileCard: {
        tag: "OFFICIAL STUDENT ID",
        majorInfo: "IT — Smart Logistics Major",
        sub: "University of Transport Ho Chi Minh City (UTH)",
        stat1Val: "Year 3",
        stat1Label: "Academic Year",
        stat2Val: "087206007835",
        stat2Label: "Student ID",
        stat3Val: "SmartLog & FilmLab",
        stat3Label: "Key Projects",
        hashtags: ["#SmartLogistics", "#FullStack", "#FilmLabConnect", "#UTH"],
      },
    },
    about: {
      badge: "PROFILE & SHOWCASE",
      titlePrefix: "Story &",
      titleHighlight: "Highlighted Projects",
      subtitle: "My learning journey as an IT student — from first lines of code to hands-on Smart Logistics projects and practical web applications.",
      narrativeTitle: "Academic Focus & Career Goals",
      narrativeSub: "Summary of coursework, lifestyle balance, and professional aspirations",
      bioCards: [
        {
          title: "Smart Logistics & IT Background",
          content: "As a 3rd-year <strong>Smart Logistics</strong> student at UTH, I focus on applying software to real supply chain challenges: vehicle routing simulation, freight coordination, and live interactive map dashboards."
        },
        {
          title: "Healthy & Balanced Lifestyle",
          content: "Building stamina and reflexes through daily <strong>badminton</strong> games, unwinding with weekend <strong>camping and fishing</strong> at Tri An lake and Nam Cat Tien, and relaxing with friends on my <strong>Lenovo LOQ</strong> laptop."
        },
        {
          title: "Career Goals & Core Values",
          content: "Aspiring to become a reliable <strong>Full-Stack Software Engineer</strong> with solid technical foundations. Dedicated to clean code, user-centric thinking, and a strong sense of responsibility in my work."
        }
      ],
      bentoHeader: "Technical Skills & Highlighted Course Projects",
      bentoSub: "BENTO GRID • SMART LOGISTICS & IT SHOWCASE",
      bentoCards: [
        {
          id: "card-filmlab",
          title: "Film Processing & Scanning Platform",
          subtitle: "FilmLab Connect — Digital bridge between film shooters and MiniLabs",
          description: "A digital platform modernizing film lab workflows: roll pickup orders, real-time chemical/scan progress tracking, cloud gallery downloads, and convenient payment.",
          badge: "Featured Project",
          subBadge: "Web & Mobile App",
          statusBadge: "In Progress",
          githubUrl: "https://github.com/huylamnhat/Photographer-enthusiastic-environment",
          githubLabel: "GitHub Repository",
          highlightsHeader: "TECH SPEC & CAPABILITIES",
          highlights: [
            "Fluid Web & Mobile cross-platform interface built with Flutter, intuitive and easy to use.",
            "Backend & Database: Node.js/Express REST API backed by Microsoft SQL Server.",
            "CI/CD Pipeline: GitHub Actions automated workflow for testing and packaging.",
            "Practical features: Barcode tracking for film rolls, role-based access, and digital gallery storage."
          ],
          tags: ["Flutter", "Node.js", "SQL Server", "GitHub Actions"]
        },
        {
          id: "card-logistics",
          title: "Smart Logistics Major",
          subtitle: "University of Transport Ho Chi Minh City (UTH)",
          description: "Formal curriculum combining computer science foundations with modern supply chain and freight management analytics.",
          badge: "Academic Specialization",
          highlightsHeader: "ACADEMIC INFORMATION",
          highlights: [
            "Faculty of Information Technology — UTH University (Student ID: 087206007835).",
            "Key Coursework: Web Development, Database Engineering, Smart Logistics Systems.",
            "Optimization focus: Applying algorithms to freight consolidation, loading, and route selection."
          ],
          tags: ["Smart Logistics", "UTH", "Supply Chain"]
        },
        {
          id: "card-smartlog",
          title: "SmartLog Transport Monitoring System",
          subtitle: "Real-time fleet tracking & warehouse condition dashboard",
          description: "Experimental web application tracking freight vehicle movements on interactive Leaflet maps, testing shortest-path routing and warehouse status alerts.",
          badge: "Course Project",
          subBadge: "Experiment",
          highlightsHeader: "KEY CAPABILITIES",
          highlights: [
            "Interactive digital map: Real-time GPS fleet tracking powered by OpenStreetMap & Leaflet.",
            "Routing algorithm: Recommending shortest travel paths to reduce transit time and fuel consumption.",
            "Warehouse monitoring: Live indicators for cargo temperature thresholds and pallet capacity."
          ],
          tags: ["React", "TypeScript", "Leaflet", "GPS Tracking"]
        },
        {
          id: "card-finflow",
          title: "FinFlow & Database Course Projects",
          subtitle: "Personal budget tracking & practical data structure algorithms",
          description: "Personal expense management application combined with practical implementations of classic algorithms (AVL trees, Dijkstra graph routing, relational schema normalization).",
          badge: "Course Project",
          highlightsHeader: "TECHNICAL BASIS",
          highlights: [
            "Financial breakdown: Visual weekly and monthly income and expense charts.",
            "Data structures: Practical application of graph algorithms and binary search trees.",
            "Relational database: Normalized schema design minimizing redundancy and optimizing query speed."
          ],
          tags: ["Data Structures", "Algorithms", "Chart.js", "SQL"]
        },
        {
          id: "card-philosophy",
          title: "Study & Work Philosophy",
          subtitle: "Proactive, persistent, and continually improving",
          description: "I believe good software comes from understanding user needs, writing clean and disciplined code, and collaborating constructively with teammates.",
          badge: "Personal Perspective",
          highlightsHeader: "CORE VALUES",
          highlights: [
            "Clean code: Clear, maintainable, and well-structured implementation.",
            "Patience & stamina: Sports reflexes help me stay calm and systematic while debugging.",
            "Life balance: Recharging mental clarity through sports, wilderness trips, and music."
          ],
          tags: ["Clean Code", "Discipline", "Teamwork"]
        }
      ]
    },
    skills: {
      badge: "SKILLS & TOOLING",
      titlePrefix: "Tech Ecosystem &",
      titleHighlight: "Engineering Toolkit",
      subtitle: "Technologies and tools I have learned and applied in web projects, mobile apps, and database systems.",
      filterAll: "All Technologies",
      filterLanguages: "Web & Mobile",
      filterBackend: "Backend & Data",
      filterTools: "Tooling & Workflow",
      activeStatus: "In active use",
      readyStatus: "Project-ready",
      showAllSkills: "Show all skills",
      collapseSkills: "Collapse list",
      categories: [
        {
          categoryTitle: "Web & Mobile Development",
          categoryDesc: "Modern technologies learned and applied to engineer reactive web applications and cross-platform mobile experiences.",
          skills: [
            { name: "React", icon: "Code2", level: "Proficient", experience: "Component architecture, Custom Hooks, State management", featured: true },
            { name: "Flutter", icon: "Flame", level: "Intermediate", experience: "Cross-platform Web & Mobile development for FilmLab Connect", featured: true },
            { name: "TypeScript", icon: "FileCode2", level: "Proficient", experience: "Strict type safety, Generics, Interface contracts", featured: true },
            { name: "Tailwind CSS", icon: "Palette", level: "Proficient", experience: "Design tokens, Responsive layouts, Dark/Light theming", featured: true },
            { name: "JavaScript (ES6+)", icon: "FileJson", level: "Proficient", experience: "Async/await, Event Loop, DOM manipulation", featured: true },
            { name: "Next.js", icon: "Layers", level: "Beginner", experience: "Server components, App Router, Static export", featured: false },
            { name: "HTML5 / Modern CSS", icon: "Layout", level: "Proficient", experience: "Semantic markup, CSS Grid, Flexbox, Accessible UI", featured: false },
            { name: "Framer Motion", icon: "Sparkles", level: "Intermediate", experience: "Spring physics, micro-interactions, layout transitions", featured: true },
          ]
        },
        {
          categoryTitle: "Backend Systems & Database",
          categoryDesc: "Foundational expertise in RESTful API architecture, relational database schemas, and query optimization.",
          skills: [
            { name: "Microsoft SQL Server", icon: "Database", level: "Proficient", experience: "Normalized relational schemas, Stored Procedures, T-SQL", featured: true },
            { name: "Node.js & Express", icon: "Server", level: "Intermediate", experience: "RESTful API, middleware, routing, token authentication", featured: true },
            { name: "C / C++", icon: "Cpu", level: "Beginner", experience: "Advanced data structures, graph algorithms & memory management", featured: false },
            { name: "Python", icon: "Terminal", level: "Beginner", experience: "Data processing fundamentals, automated test scripting", featured: false },
          ]
        },
        {
          categoryTitle: "Engineering Tooling & DevOps",
          categoryDesc: "Productive development workflow on Lenovo LOQ laptop with version control, automated testing, and UI design.",
          skills: [
            { name: "Git & GitHub", icon: "GitBranch", level: "Proficient", experience: "Git flow, PR reviews, merge strategies, issue tracking", featured: true },
            { name: "GitHub Actions", icon: "Zap", level: "Intermediate", experience: "Automated CI/CD build & test pipeline configuration", featured: true },
            { name: "VS Code & Antigravity", icon: "Code", level: "Proficient", experience: "AI-assisted programming and high-productivity development", featured: true },
            { name: "Figma", icon: "PenTool", level: "Intermediate", experience: "UI/UX wireframing, component design, responsive spec", featured: true },
            { name: "Postman", icon: "Send", level: "Intermediate", experience: "API endpoint validation, mock servers, payload debugging", featured: false },
            { name: "Vite", icon: "Zap", level: "Proficient", experience: "High-speed bundling, modern HMR build tooling", featured: false },
          ]
        }
      ]
    },
    gallery: {
      badge: "MOMENTS & LIFE",
      titlePrefix: "Visual Chronicles &",
      titleHighlight: "Everyday Life",
      subtitle: "Authentic moments from student life: trekking in Nam Cat Tien forest, camping at Tri An lake, watching the 30/4 parade, and hometown roots.",
      filterAll: "All Moments",
      hint: "Click any photograph to view the full resolution and story behind the moment",
      closeLightbox: "Close (ESC)",
      locationLabel: "Location",
      dateLabel: "Date",
      items: [
        {
          id: "workspace-setup",
          title: "Study & Coding Workspace",
          subtitle: "Lenovo LOQ laptop and dual-display study setup",
          location: "Personal Study Desk",
          date: "2025 – 2026",
          image: "./gallery/workspace-pc.jpg",
          aspect: "portrait",
          tag: "Workspace",
          categoryKey: "expedition",
          story: "My everyday study desk where I build course assignments, academic projects, and explore emerging technologies."
        },
        {
          id: "coastal-portrait",
          title: "Outdoor Coastal Portrait",
          subtitle: "A breezy late afternoon on Vung Tau beach",
          location: "Vung Tau Coastline",
          date: "2025",
          image: "./gallery/coastal-portrait.jpg",
          aspect: "portrait",
          tag: "Portrait",
          categoryKey: "portrait",
          story: "A refreshing weekend trip with university friends. The cool ocean breeze helped recharge my energy after demanding study sessions."
        },
        {
          id: "cat-tien-stream",
          title: "By Nam Cat Tien Forest Stream",
          subtitle: "Resting alongside the rocky natural stream",
          location: "Nam Cat Tien National Park",
          date: "April 26, 2025",
          image: "./gallery/cat-tien-stream.jpg",
          aspect: "portrait",
          tag: "Expedition",
          categoryKey: "expedition",
          story: "Trekking through the lush canopy of Nam Cat Tien National Park. Pausing by the cool stream surrounded by pristine nature was unforgettable."
        },
        {
          id: "cat-tien-friends",
          title: "Memories with Friends at Cat Tien",
          subtitle: "Commemorative photo on the wooden forest boardwalk",
          location: "Cat Tien Forest Boardwalk",
          date: "April 26, 2025",
          image: "./gallery/cat-tien-friends.jpg",
          aspect: "portrait",
          tag: "Friendship",
          categoryKey: "friendship",
          story: "Laughter, camaraderie, and mutual support across kilometers of forest trekking. Unforgettable memories from our university days."
        },
        {
          id: "tri-an-sunset",
          title: "Sunset Over Tri An Lake",
          subtitle: "Lakeside camping and relaxing fishing session",
          location: "Tri An Lake, Dong Nai",
          date: "2025",
          image: "./gallery/tri-an-sunset.jpg",
          aspect: "portrait",
          tag: "Nature",
          categoryKey: "heritage",
          story: "Golden sunset reflecting across the tranquil waters of Tri An Lake. Waiting for a catch by the water brings genuine calm and mental clarity."
        },
        {
          id: "hilltop-friends",
          title: "Catching the Hilltop Breeze",
          subtitle: "Pausing roadside to admire the green meadows",
          location: "Tri An Hilltop, Dong Nai",
          date: "April 26, 2025",
          image: "./gallery/hilltop-friends.jpg",
          aspect: "landscape",
          tag: "Youth",
          categoryKey: "friendship",
          story: "After a scenic motorbike ride with friends, we stopped atop the hill to catch the breeze, looking out over the verdant valley below."
        },
        {
          id: "vietnam-parade",
          title: "Watching the 30/4 Victory Parade",
          subtitle: "Celebrating Reunification Day with crowds in Ho Chi Minh City",
          location: "Ho Chi Minh City",
          date: "April 30, 2025",
          image: "./gallery/vietnam-parade.jpg",
          aspect: "portrait",
          tag: "National Pride",
          categoryKey: "pride",
          story: "Joining the sea of citizens to witness the historic parade on April 30. Seeing the red flag with yellow star flying high evokes profound national pride and gratitude."
        },
        {
          id: "heritage-ricefield",
          title: "Visiting Mekong Delta Roots",
          subtitle: "Traditional checkered scarf across lush Dong Thap rice paddies",
          location: "Mekong River Delta",
          date: "2024",
          image: "./gallery/heritage-ricefield.jpg",
          aspect: "landscape",
          tag: "Heritage",
          categoryKey: "heritage",
          story: "With roots in Dong Thap province, returning to vast golden rice paddies always brings a deep feeling of grounding, warmth, and peace."
        },
        {
          id: "graduation-day",
          title: "High School Graduation Day",
          subtitle: "Stepping stone to UTH University and Smart Logistics",
          location: "High School Campus",
          date: "2024",
          image: "./gallery/graduation-day.jpg",
          aspect: "portrait",
          tag: "Milestone",
          categoryKey: "portrait",
          story: "Commencement ceremony celebrating high school graduation. A defining milestone transitioning into university life and Smart Logistics at UTH."
        }
      ]
    },
    hobbies: {
      badge: "LIFESTYLE & PASSIONS",
      titlePrefix: "Hobbies &",
      titleHighlight: "Life Energy",
      subtitle: "Activities that build stamina, maintain mental focus, and restore balance outside the classroom.",
      viewGrid: "Grid View",
      viewCarousel: "Carousel",
      viewStack: "Card Stack",
      exploreDetail: "Read the story",
      backBtn: "Back",
      nextStackCard: "Next Card",
      prevStackCard: "Previous Card",
      stackHint: "Click any background card or use controls to flip the deck",
      activeCardBadge: "Featured Card",
      deckCounter: "3D Card Deck",
      items: [
        {
          id: "badminton",
          title: "Afternoon Badminton",
          subtitle: "Stamina, agile reflexes, and court teamwork",
          story: "After demanding hours of study and software development, late afternoons are when I head to the court with friends. Decisive smashes, agile net saves, and energetic matches help relieve stress, build endurance, and maintain high mental focus.",
          quote: "Quick reflexes on the court cultivate decisive problem-solving and focus in engineering.",
          tags: ["UTH Badminton", "Cardio & Stamina", "Agile Reflexes", "Court Teammates", "Stress Relief"],
          stats: [
            { label: "Frequency", value: "3–4 sessions/wk" },
            { label: "Playstyle", value: "Agile & Attack" },
            { label: "Benefit", value: "Endurance & Stamina" }
          ]
        },
        {
          id: "camping-fishing",
          title: "Outdoor Camping & Fishing",
          subtitle: "Tri An Lake, Nam Cat Tien & Tra Su Forest",
          story: "Setting aside assignments to pitch a tent by Tri An lake, enjoy the evening sunset, and drop a fishing line. The quiet moments waiting for a bite by calm waters, or trekking along tree-lined trails in Nam Cat Tien and Tra Su, help me unwind and recharge study energy.",
          quote: "Stepping away from city noise into nature restores mental clarity and balance.",
          tags: ["Tri An Camping", "Lakeside Fishing", "Nam Cat Tien", "Tra Su Forest", "Weekend Getaway"],
          stats: [
            { label: "Location", value: "Tri An & Cat Tien" },
            { label: "Activity", value: "Camping & Fishing" },
            { label: "Vibe", value: "Peaceful & Free" }
          ]
        },
        {
          id: "gaming",
          title: "Gaming & Tactical Strategy",
          subtitle: "Valorant, Teamfight Tactics (TFT), and wandering in Stray",
          story: "Tactical teamwork in Valorant, economic planning in TFT, or wandering through futuristic alleys as a cat in Stray offer engaging entertainment on my Lenovo LOQ laptop. Gaming trains calmness under pressure and smooth team communication.",
          quote: "Stay composed, assess the situation calmly, and communicate clearly with teammates to achieve the best result.",
          tags: ["Valorant FPS", "TFT Strategy", "Stray Adventure", "Lenovo LOQ", "Team Voice Chat"],
          stats: [
            { label: "Setup", value: "Lenovo LOQ Laptop" },
            { label: "Games", value: "Valorant, TFT, Stray" },
            { label: "Style", value: "Team Strategy" }
          ]
        },
        {
          id: "music-national",
          title: "Traditional Anthems & Acoustic",
          subtitle: "Heroic national songs and gentle acoustic guitar melodies",
          story: "Music is an essential companion in my everyday life. Experiencing the 30/4 military parade in person and hearing stirring anthems brings a deep sense of pride. During late-night study sessions, soft acoustic guitar tracks help me maintain focus and tranquility.",
          quote: "Music fosters deep concentration for studying and nurtures pride in my homeland.",
          tags: ["Traditional Anthems", "Homeland Pride", "Acoustic Guitar", "Study Focus", "Gentle Melodies"],
          stats: [
            { label: "Genres", value: "Anthems & Acoustic" },
            { label: "Inspiration", value: "Patriotism & Roots" },
            { label: "Memory", value: "30/4 Military Parade" }
          ]
        }
      ]
    },
    contact: {
      badge: "CONNECT & COLLABORATE",
      titlePrefix: "Drop a Line &",
      titleHighlight: "Get in Touch",
      subtitle: "Always open to discussing student projects, Smart Logistics technologies, or web development internship opportunities.",
      emailTitle: "Primary Email",
      copySuccess: "Email copied!",
      copyTooltip: "Copy email address to clipboard",
      universityTitle: "University",
      universityDesc: "University of Transport Ho Chi Minh City (UTH)",
      locationTitle: "Location",
      locationDesc: "Ho Chi Minh City & Dong Thap",
      form: {
        title: "Quick Message",
        sub: "Typically respond within 24 hours",
        nameLabel: "Your Name",
        namePlaceholder: "Alex Nguyen",
        emailLabel: "Email Address",
        emailPlaceholder: "example@domain.com",
        messageLabel: "Message Content",
        messagePlaceholder: "Hi Do, I'd like to discuss a project...",
        submitBtn: "Send Message",
        sendingBtn: "Sending...",
        sentSuccess: "Thank you! Your message has been sent successfully.",
      },
      socialsTitle: "Social channels & repositories",
      rights: "Copyright © Pham Thanh Do. Web Development Course Project — University of Transport Ho Chi Minh City (UTH).",
      backToTop: "Back to Top",
      studentCardLink: "View UTH Student Credentials",
    },
    modal: {
      badge: "VERIFIED ACADEMIC CREDENTIAL",
      title: "Official Student Information",
      subtitle: "Evaluation data for Web Development course project",
      fullName: "Student Full Name",
      studentId: "Student ID (MSSV)",
      classGroup: "Class Group & Team",
      university: "Institution",
      major: "Specialization",
      academicYear: "Academic Term",
      instructor: "Faculty Instructor",
      submissionDate: "Presentation Date",
      courseName: "Course Subject",
      courseCode: "Course ID",
      verifiedBadge: "Verified UTH University Student Record",
      closeBtn: "Close Modal",
    }
  }
};
