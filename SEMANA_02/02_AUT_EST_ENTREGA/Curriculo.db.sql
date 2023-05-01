BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "tb_formacao" (
	"curso_id"	INTEGER NOT NULL UNIQUE,
	"curso"	TEXT NOT NULL,
	"ano_inicio"	NUMERIC NOT NULL,
	"ano_fim"	INTEGER NOT NULL,
	"descricao"	TEXT NOT NULL,
	"candidato_id"	INTEGER,
	PRIMARY KEY("curso_id" AUTOINCREMENT),
	FOREIGN KEY("candidato_id") REFERENCES "tb_candidato"
);
CREATE TABLE IF NOT EXISTS "tb_experiencia" (
	"exp_id"	INTEGER NOT NULL UNIQUE,
	"titulo"	TEXT NOT NULL,
	"ano_inicio"	INTEGER NOT NULL,
	"ano_fim"	INTEGER NOT NULL,
	"descricao"	TEXT NOT NULL,
	"cargo"	TEXT NOT NULL,
	"candidato_id"	INTEGER,
	PRIMARY KEY("exp_id" AUTOINCREMENT),
	FOREIGN KEY("candidato_id") REFERENCES "tb_candidato"
);
CREATE TABLE IF NOT EXISTS "tb_realisacoes" (
	"realisacao_id"	INTEGER NOT NULL UNIQUE,
	"titulo"	TEXT NOT NULL,
	"ano"	INTEGER NOT NULL,
	"descricao"	TEXT NOT NULL,
	"candidato_id"	INTEGER NOT NULL,
	PRIMARY KEY("realisacao_id" AUTOINCREMENT),
	FOREIGN KEY("candidato_id") REFERENCES "tb_candidato"
);
CREATE TABLE IF NOT EXISTS "tb_candidato" (
	"id"	INTEGER NOT NULL UNIQUE,
	"nome"	TEXT NOT NULL,
	"cargo"	TEXT NOT NULL,
	"foto"	BLOB NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "tb_caracteristicas" (
	"caracteristica_id"	INTEGER NOT NULL UNIQUE,
	"titulo"	TEXT NOT NULL,
	"nivel"	INTEGER NOT NULL,
	"candidato_id"	INTEGER,
	PRIMARY KEY("caracteristica_id" AUTOINCREMENT),
	FOREIGN KEY("candidato_id") REFERENCES "tb_candidato"("id")
);
CREATE TABLE IF NOT EXISTS "tb_info" (
	"info_id"	INTEGER NOT NULL UNIQUE,
	"endereco"	TEXT NOT NULL,
	"telefone"	INTEGER NOT NULL,
	"email"	TEXT NOT NULL,
	"descricao"	TEXT NOT NULL,
	"candidato_id"	INTEGER,
	PRIMARY KEY("info_id" AUTOINCREMENT),
	FOREIGN KEY("candidato_id") REFERENCES "tb_candidato"("id")
);
CREATE TABLE IF NOT EXISTS "tb_habilidades" (
	"habilidade_id"	INTEGER NOT NULL UNIQUE,
	"titulo"	TEXT NOT NULL,
	"nivel"	INTEGER NOT NULL,
	"candidato_id"	INTEGER,
	PRIMARY KEY("habilidade_id" AUTOINCREMENT),
	FOREIGN KEY("candidato_id") REFERENCES "tb_candidato"("id")
);
INSERT INTO "tb_candidato" ("id","nome","cargo","foto") VALUES (0,'','','');
COMMIT;
