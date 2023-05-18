-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Constellation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_Constellation" ("id", "isActive", "name") SELECT "id", coalesce("isActive", true) AS "isActive", "name" FROM "Constellation";
DROP TABLE "Constellation";
ALTER TABLE "new_Constellation" RENAME TO "Constellation";
CREATE TABLE "new_Star" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "urlImage" TEXT NOT NULL,
    "constellationId" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "Star_constellationId_fkey" FOREIGN KEY ("constellationId") REFERENCES "Constellation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Star" ("constellationId", "description", "id", "isActive", "name", "urlImage") SELECT "constellationId", "description", "id", coalesce("isActive", true) AS "isActive", "name", "urlImage" FROM "Star";
DROP TABLE "Star";
ALTER TABLE "new_Star" RENAME TO "Star";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
