-- ========================
-- 1. MAIN RAGAS TABLE
-- ========================
CREATE TABLE ragas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE COMMENT 'Raga name in Devanagari/English',
  devanagari_name VARCHAR(100) COMMENT 'राग name in Devanagari',
  
  -- Core Theory
  thaat VARCHAR(50) NOT NULL,
  time_of_day VARCHAR(50) COMMENT 'e.g., "Morning (1st Prahar)", "Night"',
  season VARCHAR(50) COMMENT 'Optional: e.g., "Monsoon"',
  description TEXT COMMENT 'Detailed raga characteristics',
  
  -- Swar Structure
  aaroh TEXT NOT NULL COMMENT 'Ascending scale',
  avroh TEXT NOT NULL COMMENT 'Descending scale',
  pakad TEXT COMMENT 'Signature phrase',
  chalan TEXT COMMENT 'Movement pattern',
  
  -- Swar Analysis
  vadi_swar VARCHAR(10) COMMENT 'Dominant note',
  samvadi_swar VARCHAR(10) COMMENT 'Sub-dominant note',
  anuvadi_swar TEXT COMMENT 'Supporting notes',
  varjit_swar TEXT COMMENT 'Avoided notes',
  
  -- Swar Classification
  komal_swar VARCHAR(50) COMMENT 'e.g., "r, g, d, n"',
  shuddha_swar VARCHAR(50) COMMENT 'e.g., "S, P"',
  teevra_swar VARCHAR(50) COMMENT 'e.g., "M" (for ragas like Marwa)',
  
  -- Additional Metadata
  popularity TINYINT DEFAULT 3 COMMENT '1-5 scale',
  mood VARCHAR(50) COMMENT 'e.g., "Devotional", "Romantic"',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ========================
-- 2. RAGA RESOURCES TABLE
-- ========================
CREATE TABLE raga_resources (
  id INT AUTO_INCREMENT PRIMARY KEY,
  raga_id INT NOT NULL,
  resource_type ENUM(
    'bandish', 
    'dhrupad', 
    'dhamar', 
    'bada_khayal', 
    'chhota_khayal', 
    'tarana', 
    'performance', 
    'tutorial', 
    'documentary'
  ) NOT NULL,
  title VARCHAR(255) NOT NULL,
  url VARCHAR(512) NOT NULL,
  lyrics TEXT COMMENT 'Full lyrics for bandishes',
  taal VARCHAR(50) COMMENT 'e.g., "Teental", "Jhaptal"',
  language VARCHAR(50) COMMENT 'e.g., "Hindi", "Braj Bhasha"',
  artist VARCHAR(100),
  duration VARCHAR(20) COMMENT 'e.g., "12:45"',
  
  FOREIGN KEY (raga_id) REFERENCES ragas(id) ON DELETE CASCADE,
  INDEX (raga_id, resource_type)
) ENGINE=InnoDB;

-- ========================
-- 3. RAGA Q&A TABLE
-- ========================
CREATE TABLE raga_questions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  raga_id INT NOT NULL,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  difficulty ENUM('beginner', 'intermediate', 'advanced') DEFAULT 'beginner',
  category ENUM('theory', 'history', 'performance', 'comparison') DEFAULT 'theory',
  
  FOREIGN KEY (raga_id) REFERENCES ragas(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ========================
-- 4. PRACTICE LOGS (Future Use)
-- ========================
CREATE TABLE practice_logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  raga_id INT NOT NULL,
  session_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  duration_min INT NOT NULL,
  focus_area VARCHAR(100) COMMENT 'e.g., "Aaroh practice", "Bandish refinement"',
  notes TEXT,
  recording_path VARCHAR(512),
  
  FOREIGN KEY (raga_id) REFERENCES ragas(id) ON DELETE CASCADE,
  INDEX (raga_id, session_date)
) ENGINE=InnoDB;