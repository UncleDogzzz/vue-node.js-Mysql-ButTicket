/*
 Navicat Premium Data Transfer

 Source Server         : Uncledog
 Source Server Type    : MySQL
 Source Server Version : 80027
 Source Host           : localhost:3306
 Source Schema         : vue-ticket

 Target Server Type    : MySQL
 Target Server Version : 80027
 File Encoding         : 65001

 Date: 23/12/2021 19:21:48
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for cinemas
-- ----------------------------
DROP TABLE IF EXISTS `cinemas`;
CREATE TABLE `cinemas`  (
  `id` int NOT NULL,
  `name` varchar(999) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `addr` varchar(999) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `vipInfo` varchar(99) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `endorse` varchar(999) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `allowRefund` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `snack` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `vipTag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cinemas
-- ----------------------------
INSERT INTO `cinemas` VALUES (7952, '影天下国际影城', '从化区从城大道欣荣宏国际商贸城3楼（雅居乐对面）', '开卡特惠，24.9元起开卡', '0', '0', '0', '1');
INSERT INTO `cinemas` VALUES (11257, '新光影城', '从化区福从路2号新光百德广场3楼', '开卡特惠，9.9元起开卡', '1', '0', '1', '1');
INSERT INTO `cinemas` VALUES (17278, '诚丰影城（从化店', '从化区埔街道红荔新村16栋', '开卡特惠，首单1张最高立减3元', '1', '1', '1', '1');

-- ----------------------------
-- Table structure for cinemasschedule
-- ----------------------------
DROP TABLE IF EXISTS `cinemasschedule`;
CREATE TABLE `cinemasschedule`  (
  `index` int NOT NULL AUTO_INCREMENT,
  `cinemaId` int NULL DEFAULT NULL,
  `moviceId` int NULL DEFAULT NULL,
  `time` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `seat` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `price` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`index`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cinemasschedule
-- ----------------------------
INSERT INTO `cinemasschedule` VALUES (1, 7952, 30932, '15:00', '{\"第一排\":[1,0,0,0,1],\"第二排\":[0,0,0,0,0,0],\"第三排\":[0,0,0,0,0],\"第四排\":[0,0,0,0,0]}', '39');
INSERT INTO `cinemasschedule` VALUES (2, 7952, 257706, '16:00', '{\"第一排\":[0,0,0,0,0],\"第二排\":[0,0,0,0,0,0]}', '39');
INSERT INTO `cinemasschedule` VALUES (3, 7952, 30932, '19:00', '{\"第一排\":[0,0,0,0,0],\"第二排\":[0,0,0,0,0,0]}', '39');
INSERT INTO `cinemasschedule` VALUES (4, 7952, 1212303, '12:00', '{\"第一排\":[0,0,0,0,0],\"第二排\":[0,0,0,0,0,0]}', '40');
INSERT INTO `cinemasschedule` VALUES (5, 7952, 1228771, '11:00', '{\"第一排\":[0,0,0,0,1],\"第二排\":[0,0,0,0,0,0],\"第三排\":[0,0,0,0,0],\"第四排\":[0,0,0,0,0]}', '27');
INSERT INTO `cinemasschedule` VALUES (6, 7952, 1228771, '16:50', '{\"第一排\":[0,0,0,0,1],\"第二排\":[0,0,0,0,0,0],\"第三排\":[0,0,0,0,0],\"第四排\":[0,0,0,0,0]}', '27');

-- ----------------------------
-- Table structure for customer
-- ----------------------------
DROP TABLE IF EXISTS `customer`;
CREATE TABLE `customer`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `cinemaid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `time` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `moviceid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `seat` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `price` varchar(99) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 22 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of customer
-- ----------------------------
INSERT INTO `customer` VALUES (19, 'distant', '7952', '18:25', '1331230', '4', '36');
INSERT INTO `customer` VALUES (20, 'distant', '17278', '13:35', '', 'undefined', '33');
INSERT INTO `customer` VALUES (21, 'distant', '17278', '13:35', '', 'undefined', '33');

-- ----------------------------
-- Table structure for movicedetail
-- ----------------------------
DROP TABLE IF EXISTS `movicedetail`;
CREATE TABLE `movicedetail`  (
  `id` int NOT NULL,
  `img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ename` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `cat` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `star` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `pubDesc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `wish` int NULL DEFAULT NULL,
  `watched` int NULL DEFAULT NULL,
  `score` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `snum` int NULL DEFAULT NULL,
  `introduction` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `video` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of movicedetail
-- ----------------------------
INSERT INTO `movicedetail` VALUES (30932, 'http://localhost:3000/public/images/rujianshi.png', '入殓师', 'おくりびと', '剧情', '本木雅弘 / 广末凉子 / 山崎努', '2021-10-29 12:00中国大陆上映/131分钟', 56010, 1986044, '8.6', 25231, '大提琴手小林大悟突遇乐团解散，阴差阳错面试了入殓师的工作。面对妻子和周围人的不理解，原本十分抗拒的他却逐渐在工作中找到自我价值，以洒脱之情坚守内心的故事。', 'https://vod.pipi.cn/fec9203cvodtransbj1251246104/5ca62cd08602268010975449668/v.f42905.mp4');
INSERT INTO `movicedetail` VALUES (257706, 'http://localhost:3000/public/images/changjinghu.jpg', '长津湖', 'The Battle at Lake Changjin', '剧情 / 历史 / 战争', '吴京 / 易烊千玺 / 段奕宏', '2021-09-30 09:30中国大陆上映/176分钟', 1012616, 121751530, '9.5', 1864327, '电影《长津湖》以抗美援朝战争第二次战役中的长津湖战役为背景，讲述了一段波澜壮阔的历史：71年前，中国人民志愿军赴朝作战，在极寒严酷环境下，东线作战部队凭着钢铁意志和英勇无畏的战斗精神一路追击，奋勇杀敌，扭转了战场态势，打出了军威国威。', 'https://vod.pipi.cn/fec9203cvodtransbj1251246104/b5b8122f3701925925279143669/v.f42905.mp4');
INSERT INTO `movicedetail` VALUES (1212303, 'http://localhost:3000/public/images/gudong.jpg', '古董局中局', 'Schemes In Antiques', '剧情 / 悬疑 / 冒险', '雷佳音 / 李现 / 葛优', '2021-12-03 10:00中国大陆上映/123分钟', 223079, 1633870, '8.8', 2561, '一尊价值连城的佛头，牵扯出古玩界惊天骗局！民国年间文物界权威组织“五脉”掌门许一城，将武则天明堂佛头送至海外，被定罪为汉奸。半个世纪后，佛头归还，指明要许一城的后人，许家第三代许愿出面接收。许愿虽有一身鉴古本事，却因父亲许和平当年抛下自己而一蹶不振，混迹市井，如今佛头现世，五脉黄家后人黄烟烟又为他带来父亲离奇死亡的消息，许愿被卷入古董界的漩涡之中。寻宝重任、家族冤屈、五脉天才药不然的步步紧逼、祖父故交付贵的追随和神秘人老朝奉的追击……许愿必须摆脱各方势力的纠缠，还要赶在回归仪式开始之前，查明佛头的真相。', 'https://vod.pipi.cn/fec9203cvodtransbj1251246104/3f63bab6387702291890173464/v.f42905.mp4');
INSERT INTO `movicedetail` VALUES (1228771, 'http://localhost:3000/public/images/meiyanfang.jpg', '梅艳芳', 'ANITA', '剧情 / 传记', '王丹妮 / 刘俊谦 / 廖子妤', '2021-11-12 09:00中国大陆上映/137分钟', 145017, 2551551, '9.2', 44731, '电影《梅艳芳》讲述了梅艳芳一生的传奇经历。梅艳芳年仅4岁半便和姐姐梅爱芳一起登台卖唱，养家糊口。19岁参加华星唱片举办的第一届新秀歌唱大赛，获得冠军，从此同舞台结下不解之缘，凭借敬业的精神和过人的才华，慢慢成长为一代巨星，获封“百变天后”。2003年，一首《夕阳之歌》和一件定制的婚纱，她选择把自己嫁给了舞台。风华绝代尤可见，世间再无梅艳芳。', 'https://vod.pipi.cn/fec9203cvodtransbj1251246104/47e84faa387702291231173346/v.f42905.mp4');
INSERT INTO `movicedetail` VALUES (1331230, 'http://localhost:3000/public/images/mensuo.jpg', '门锁', 'Door Lock', '悬疑/ 惊悚 / 犯罪', '白百何 / 白客 / 范丞丞', '2021-11-19 18:00中国大陆上映/105分钟', 217494, 4286312, '8.0', 89651, '单身貌美的方卉，独自在大城市打拼，过着两点一线的生活。一天夜里，她突然听见门外有人暴力拉拽门把手试图闯入。虽然没有看清门外是谁，但通过保安小吴得知，自己楼层的监控坏了。这让方卉平静的独居生活突然笼罩在惊恐不安的阴影之中。当夜晚再次降临，熟睡中的方卉隐约察觉有人进入了她的房间，但她醒来后却没有发现任何迹象。渐渐，她的精神状态也开始变得越来越差。身边反复出现的几个男人，房屋中介高齐、保安小吴、公司领导李总、宠物医生郑飞，他们似乎都有自己不可告人的目的。随着好闺蜜乔小曼的离奇失踪，独居，几乎成为了方卉的梦魇……', 'https://vod.pipi.cn/fec9203cvodtransbj1251246104/4e15a0b3387702291462645921/v.f42905.mp4');
INSERT INTO `movicedetail` VALUES (1357983, 'http://localhost:3000/public/images/zhiyaoni.jpg', '只要你过得比我好', 'My Son', '剧情 / 家庭', '曹炳琨 / 田浩宁 / 林博洋', '2021-12-03 08:00中国大陆上映/103分钟', 95001, 323227, '9.1', 4324, '因为一个意外事故，外卖员曹德旺（曹炳琨 饰）必须设法开具一张非亲生证明，将相依为命的儿子曹生（田浩宁 饰）送进福利院。命运的险阻接踵而至，迷惘挣扎中透出希望的微光，这对父子背后的故事，也一点点被揭开......', 'https://vod.pipi.cn/fec9203cvodtransbj1251246104/9fc540be387702291796475291/v.f42905.mp4');
INSERT INTO `movicedetail` VALUES (1363244, 'http://localhost:3000/public/images/zhongdao.jpg', '铁道英雄', NULL, '战争 / 剧情 / 动作', '张涵予 / 范伟 / 魏晨', '2021-11-19 08:00中国大陆上映/123分钟', 93914, 1920500, '9.1', 24849, '影片讲述了抗日战争时期，临城枣庄英勇的“铁道队”与敌人斗智斗勇，殊死捍卫家园的故事。', 'https://vod.pipi.cn/fec9203cvodtransbj1251246104/97de6569387702291280126307/v.f42905.mp4');
INSERT INTO `movicedetail` VALUES (1413641, 'http://localhost:3000/public/images/yangmingliwan.jpg', '扬名立万', 'BE SOMEBODY', '悬疑 / 喜剧 / 剧情', '尹正 / 邓家佳 / 喻恩泰', '2021-11-11 18:00中国大陆上映/123分钟', 196962, 11253111, '9.3', 165675, '月黑风高之夜，一群电影人被秘密召集到一起，欲将轰动一时的血案翻拍成电影，借此扬名立万。殊不知他们正身处案发现场，并步步陷入一个巨大迷局之中，而凶手就在他们中间……伴随着利欲熏天的创作风暴，案件背后的故事似乎也更加扑朔迷离，戏中戏、案中案、局中局、人外人，环环相扣，一场野心与良心的较量愈演愈烈。究竟是命悬一线，还是另有惊天逆转？爱与温暖的血色花又能否从快将干涸的血河中终极绽放？一切都有待揭开。', 'https://vod.pipi.cn/43903a81vodtransgzp1251246104/25cc352f3701925925837165683/v.f42905.mp4');

-- ----------------------------
-- Table structure for movieoninfolist
-- ----------------------------
DROP TABLE IF EXISTS `movieoninfolist`;
CREATE TABLE `movieoninfolist`  (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `star` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `score` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `showInfo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of movieoninfolist
-- ----------------------------
INSERT INTO `movieoninfolist` VALUES (30932, '入殓师', '本木雅弘 / 广末凉子 / 山崎努', '8.6', '今天50家影院放映86场', 'http://localhost:3000/public/images/rujianshi.png');
INSERT INTO `movieoninfolist` VALUES (257706, '长津湖', '吴京 / 易烊千玺 / 段奕宏', '9.5', '今天177家影院放映414场', 'http://localhost:3000/public/images/changjinghu.jpg');
INSERT INTO `movieoninfolist` VALUES (1212303, '古董局中局', '雷佳音 / 李现 / 葛优', '8.8', '今天203家影院放映1208场', 'http://localhost:3000/public/images/gudong.jpg');
INSERT INTO `movieoninfolist` VALUES (1228771, '梅艳芳', '王丹妮 / 刘俊谦 / 廖子妤', '9.2', '今天214家影院放映1440场', 'http://localhost:3000/public/images/meiyanfang.jpg');
INSERT INTO `movieoninfolist` VALUES (1331230, '门锁', '白百何 / 白客 / 范丞丞', '8.0', '今天215家影院放映1576场', 'http://localhost:3000/public/images/mensuo.jpg');
INSERT INTO `movieoninfolist` VALUES (1357983, '只要你过得比我好', '曹炳琨 / 田浩宁 / 林博洋', '9.1', '今天201家影院放映1790场', 'http://localhost:3000/public/images/zhiyaoni.jpg');
INSERT INTO `movieoninfolist` VALUES (1363244, '铁道英雄', '张涵予 / 范伟 / 魏晨', '9.1', '今天211家影院放映976场', 'http://localhost:3000/public/images/zhongdao.jpg');
INSERT INTO `movieoninfolist` VALUES (1413641, '扬名立万', '尹正 / 邓家佳 / 喻恩泰', '9.3', '今天215家影院放映2018场', 'http://localhost:3000/public/images/yangmingliwan.jpg');

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `role_description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES (1, '超级管理员', '全部权限');
INSERT INTO `role` VALUES (2, '影院管理员', '影院以及电影,档期,订单进行更新的权限');
INSERT INTO `role` VALUES (3, '普通用户', '购买,下订单,取消订单');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `account` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `salt` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `role_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 195 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'admin', '9dcff05f7a12be655f18e65025f657b6', '916e2f4e-4baa-4d50-84ae-cc0078bfcb05', 1);
INSERT INTO `user` VALUES (2, '321', 'd55147250a450b7de652be65031d9288', '2ee3afa3-fd1e-468a-92aa-e772e8ac797d', 3);
INSERT INTO `user` VALUES (12, 'test', '8a19f7316d40137ea4b9b09d98281913', 'a22aadca-595f-4417-a0bd-8854756ea73d', 3);
INSERT INTO `user` VALUES (13, 'q1253157859', '6c9923551f67365cd78a83c80b44786e', '07445f5c-93ff-4ecc-bec6-c5240d520c91', 2);
INSERT INTO `user` VALUES (14, 'wenhongda', '4f2f1f9c3fc28efad65d169cf9dd1c18', 'eac9e857-f0b1-4562-9e26-ae54637941ed', 3);
INSERT INTO `user` VALUES (16, 'wenhongda1', '469e8abadfe4197fb42d1dcdf43e3ad5', '4dc80d7d-6db4-47c3-8e52-cb41a338c2b9', 3);
INSERT INTO `user` VALUES (17, 'wenhongda2', '3a560f76c0e180fe4ab9187d0fdfe684', 'dd524b23-d12b-4949-add6-222e0555a0da', 3);
INSERT INTO `user` VALUES (18, '123', '3853ee6d24f7bc2265135a19ffb68880', '4a3f99c4-671d-4e10-b8d1-1fb55b1ef799', 3);

-- ----------------------------
-- Table structure for useroders
-- ----------------------------
DROP TABLE IF EXISTS `useroders`;
CREATE TABLE `useroders`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `scheduleId` int NULL DEFAULT NULL,
  `userId` int NULL DEFAULT NULL,
  `cinemaId` int NULL DEFAULT NULL,
  `moviceId` int NULL DEFAULT NULL,
  `time` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `seat` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `price` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 45 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of useroders
-- ----------------------------
INSERT INTO `useroders` VALUES (43, 1, 18, 7952, 30932, '15:00', '{\"第一排\":\"5号\"}', '39');
INSERT INTO `useroders` VALUES (44, 1, 18, 7952, 30932, '15:00', '{\"第一排\":\"1号\"}', '39');

SET FOREIGN_KEY_CHECKS = 1;
