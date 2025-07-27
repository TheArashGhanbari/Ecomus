#!/usr/bin/env node

import { initializeDatabase, closeDatabase } from "../lib/database.js";

async function main() {
  try {
    console.log("🚀 Initializing database...");
    await initializeDatabase();
    console.log("✅ Database initialized successfully!");
  } catch (error) {
    console.error("❌ Error initializing database:", error);
    process.exit(1);
  } finally {
    await closeDatabase();
  }
}

main();
