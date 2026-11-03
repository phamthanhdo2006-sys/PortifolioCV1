import type { PersonalProfile, BentoCardData, SkillCategory, HobbyCardData, GalleryItem } from '../types';

export const PROFILE: PersonalProfile = {
  name: "Phạm Thành Đô",
  englishName: "Pham Thanh Do",
  role: "Sinh viên CNTT — Chuyên ngành Smart Logistics",
  dateOfBirth: "05/02/2006",
  hometown: "Đồng Tháp, Việt Nam",
  tagline: "Sinh viên CNTT định hướng Smart Logistics, kết hợp tư duy tối ưu vận tải với kỹ năng phát triển phần mềm.",
  avatarUrl: "./avatar.jpg",
  secondaryAvatarUrl: "./gallery/coastal-portrait.jpg",
  location: "TP. Hồ Chí Minh",
  englishLocation: "Ho Chi Minh City",
  locationMapsUrl: "https://maps.app.goo.gl/21fFAyfG7ARj1yr16",
  email: "phamthanhdo2006@gmail.com",
  universityEmail: "dopt7835@ut.edu.vn",
  phone: "(+84) 0987 654 321",
  university: "Đại học Giao Thông Vận Tải TP.HCM (UTH)",
  englishUniversity: "University of Transport Ho Chi Minh City (UTH)",
  universityMapsUrl: "https://share.google/vmWhpfG9v8k3UpwIB",
  studentId: "087206007835",
  major: "Ngành Công Nghệ Thông Tin - Chuyên ngành: Smart Logistics",
  bio: [
    "Mình là sinh viên năm 3 chuyên ngành Smart Logistics thuộc khoa Công nghệ Thông tin tại Đại học Giao thông Vận tải TP.HCM (UTH). Mình tập trung học hỏi và phát triển các ứng dụng phần mềm phục vụ điều phối vận tải, tối ưu chuỗi cung ứng và xây dựng giao diện web trực quan.",
    "Ngoài giờ học và lập trình trên chiếc laptop Lenovo LOQ, mình thường chơi cầu lông cùng bạn bè vào mỗi buổi chiều, cắm trại và câu cá cuối tuần tại Trị An, Nam Cát Tiên hay Trà Sư. Những lúc rảnh rỗi, mình giải trí với các tựa game chiến thuật như Valorant, TFT, Stray và nghe nhạc truyền thống, acoustic để thư giãn tinh thần.",
    "Mục tiêu của mình là trở thành Kỹ sư Phần mềm Full-Stack trong lĩnh vực Logistics, áp dụng tốt các thuật toán tối ưu lộ trình, xử lý dữ liệu và xây dựng hệ thống web ổn định, hiệu quả."
  ],
  socials: {
    github: "https://github.com/phamthanhdo2006-sys",
    linkedin: "https://linkedin.com/in/phamthanhdo",
    facebook: "https://www.facebook.com/share/14vwwc2nN8Q/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/tdo_dodo?mdxt=MTJlM3Jwc2R4dDAycQ%3D%3D&utm_source=qr",
  },
};

export const BENTO_CARDS: BentoCardData[] = [
  {
    id: "card-filmlab",
    title: "Nền Tảng Dịch Vụ Tráng Rửa & Quét Phim",
    subtitle: "FilmLab Connect — Nền tảng kết nối người chụp ảnh phim với MiniLab",
    description: "Hệ thống hỗ trợ số hóa quy trình cho tiệm tráng phim: tiếp nhận đơn hàng, cập nhật tiến độ tráng scan theo thời gian thực, lưu trữ ảnh chất lượng cao và thanh toán tiện lợi.",
    highlights: [
      "Phát triển ứng dụng Web & Di động bằng Flutter với giao diện thân thiện, dễ sử dụng.",
      "Xây dựng Backend RESTful API bằng Node.js / Express kết nối cơ sở dữ liệu SQL Server.",
      "Thiết lập quy trình CI/CD cơ bản với GitHub Actions để tự động kiểm tra và đóng gói.",
      "Tích hợp tính năng quản lý đơn hàng theo mã vạch và phân quyền tài khoản rõ ràng."
    ],
    badge: "Đồ Án Tiêu Biểu",
    subBadge: "Web & Mobile App",
    statusBadge: "Đang thực hiện",
    githubUrl: "https://github.com/huylamnhat/Photographer-enthusiastic-environment",
    githubLabel: "Xem Mã Nguồn",
    iconName: "Camera",
    colSpan: "lg:col-span-8",
    tags: ["Flutter", "Node.js", "SQL Server", "GitHub Actions", "Photography"],
    accentColor: "emerald"
  },
  {
    id: "card-logistics",
    title: "Chuyên Ngành Smart Logistics",
    subtitle: "Đại học Giao Thông Vận Tải TP.HCM (UTH)",
    description: "Chương trình đào tạo kết hợp giữa nền tảng Công nghệ thông tin và kiến thức quản trị Logistics: thuật toán điều phối luồng hàng, quản lý kho bãi và vận tải hàng hóa.",
    highlights: [
      "MSSV: 087206007835 — Khoa Công nghệ Thông tin",
      "Trọng tâm: Hệ thống thông tin điều hành Logistics & Chuỗi cung ứng",
      "Phương pháp: Áp dụng thuật toán vào gom hàng, xếp dỡ và chọn lộ trình"
    ],
    badge: "Chuyên Ngành Đào Tạo",
    iconName: "Truck",
    colSpan: "lg:col-span-4",
    tags: ["Smart Logistics", "UTH", "Supply Chain"],
    accentColor: "amber"
  },
  {
    id: "card-smartlog",
    title: "Hệ Thống Giám Sát Vận Tải Thời Gian Thực",
    subtitle: "SmartLog — Giám sát đội xe và thông số kho bãi",
    description: "Ứng dụng thử nghiệm hỗ trợ theo dõi vị trí xe tải trên bản đồ số tương tác Leaflet, tính toán lộ trình ngắn nhất và hiển thị trạng thái nhiệt độ hàng hóa.",
    highlights: [
      "Bản đồ tương tác: Theo dõi vị trí và lộ trình của đội xe theo thời gian thực.",
      "Thuật toán tối ưu: Gợi ý tuyến đường ngắn nhất nhằm tiết kiệm nhiên liệu.",
      "Cảnh báo thông minh: Giám sát nhiệt độ thùng xe và sức chứa pallet."
    ],
    badge: "Đồ Án Học Tập",
    subBadge: "Thực Nghiệm",
    iconName: "Navigation",
    colSpan: "lg:col-span-4",
    tags: ["React", "TypeScript", "Leaflet", "GPS Tracking"],
    accentColor: "sky"
  },
  {
    id: "card-finflow",
    title: "FinFlow & Đồ Án CSDL, Cấu Trúc Dữ Liệu",
    subtitle: "Quản lý chi tiêu cá nhân & ứng dụng thuật toán",
    description: "Ứng dụng quản lý tài chính cá nhân phục vụ môn học, kết hợp việc thực hành các cấu trúc dữ liệu và giải thuật căn bản (Cây AVL, Dijkstra, chuẩn hóa CSDL quan hệ).",
    highlights: [
      "Thống kê chi tiêu: Biểu đồ thu chi trực quan theo tuần và theo tháng.",
      "Cấu trúc dữ liệu: Ứng dụng giải thuật đồ thị và cây tìm kiếm nhị phân vào xử lý dữ liệu.",
      "Cơ sở dữ liệu quan hệ: Thiết kế chuẩn hóa tránh dư thừa và tăng tốc truy vấn."
    ],
    badge: "Đồ Án Môn Học",
    iconName: "TrendingUp",
    colSpan: "lg:col-span-4",
    tags: ["Algorithms", "Data Structures", "Chart.js", "Database"],
    accentColor: "emerald"
  },
  {
    id: "card-philosophy",
    title: "Phương Châm Học Tập & Làm Việc",
    subtitle: "Chủ động, kiên trì và không ngừng hoàn thiện",
    description: "Mình luôn nỗ lực giữ tinh thần cầu tiến trong học tập, chú trọng viết mã nguồn rõ ràng, có trách nhiệm với sản phẩm và học cách phối hợp ăn ý cùng đồng đội.",
    highlights: [
      "Mã nguồn sạch: Viết code dễ đọc, dễ bảo trì và tuân thủ quy chuẩn.",
      "Rèn luyện sự kiên nhẫn: Phản xạ từ thể thao giúp mình bình tĩnh khi gỡ lỗi.",
      "Tinh thần học hỏi: Luôn chủ động tìm tòi công nghệ mới và tiếp thu góp ý."
    ],
    badge: "Góc Nhìn Cá Nhân",
    iconName: "Compass",
    colSpan: "lg:col-span-4",
    tags: ["Clean Code", "Mindset", "Teamwork"],
    accentColor: "amber"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    categoryTitle: "Phát Triển Web & Di Động",
    categoryDesc: "Các công nghệ mình đã học và ứng dụng để xây dựng giao diện web, ứng dụng di động đa nền tảng.",
    skills: [
      { name: "React", icon: "Code2", level: "Thành thạo", experience: "Component architecture, Custom Hooks, State management", featured: true },
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
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "workspace-setup",
    title: "Góc Học Tập & Lập Trình",
    subtitle: "Laptop Lenovo LOQ và màn hình mở rộng phục vụ học tập",
    location: "Góc học tập cá nhân",
    date: "2025 – 2026",
    image: "./gallery/workspace-pc.jpg",
    aspect: "portrait",
    tag: "Góc học tập",
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
    tag: "Dấu ấn",
    story: "Ngày nhận bằng tốt nghiệp cấp ba để chuẩn bị cho hành trình mới tại UTH, theo đuổi đam mê ngành Công nghệ thông tin."
  }
];

export const HOBBIES: HobbyCardData[] = [
  {
    id: "badminton",
    title: "Chơi Cầu Lông Mỗi Chiều",
    subtitle: "Rèn luyện thể lực, phản xạ và gắn kết bạn bè",
    story: "Sau những giờ học tập và thực hành trên máy tính, mình thường cùng các bạn ra sân cầu lông vào cuối buổi chiều. Những pha đánh cầu linh hoạt và không khí thi đấu sôi nổi giúp mình giải tỏa căng thẳng, rèn luyện sức bền và giữ tinh thần luôn thoải mái.",
    quote: "Phản xạ nhanh trên sân cầu giúp mình rèn luyện sự bình tĩnh và tập trung khi giải quyết vấn đề kỹ thuật.",
    tags: ["Cầu lông UTH", "Rèn luyện thể lực", "Phản xạ nhanh", "Gắn kết bạn bè", "Giải tỏa căng thẳng"],
    iconName: "Activity",
    accentColor: "#059669",
    bgGradient: "from-emerald-500/10 via-teal-950/20 to-transparent",
    image: "./gallery/cat-tien-friends.jpg",
    secondaryImage: "./gallery/hilltop-friends.jpg",
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
    iconName: "Tent",
    accentColor: "#D97706",
    bgGradient: "from-amber-500/10 via-orange-950/20 to-transparent",
    image: "./gallery/tri-an-sunset.jpg",
    secondaryImage: "./gallery/cat-tien-stream.jpg",
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
    iconName: "Gamepad2",
    accentColor: "#0284C7",
    bgGradient: "from-sky-500/10 via-blue-950/20 to-transparent",
    image: "./gallery/workspace-pc.jpg",
    secondaryImage: "./gallery/cat-tien-friends.jpg",
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
    iconName: "Music",
    accentColor: "#10B981",
    bgGradient: "from-emerald-500/10 via-green-950/20 to-transparent",
    image: "./gallery/vietnam-parade.jpg",
    secondaryImage: "./gallery/heritage-ricefield.jpg",
    stats: [
      { label: "Thể loại", value: "Hào hùng & Acoustic" },
      { label: "Cảm hứng", value: "Tự hào quê hương" },
      { label: "Kỷ niệm", value: "Lễ diễu binh 30/4" }
    ]
  }
];
