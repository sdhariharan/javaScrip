// ============================
// Task 1 - Download File
// ============================

function downloadFile(callback) {

    console.log("📥 Downloading File...");

    setTimeout(() => {

        console.log("✅ Download Complete");

        callback();

    }, 2000);

}


// ============================
// Task 2 - Process File
// ============================

function processFile(callback) {

    console.log("⚙️ Processing File...");

    setTimeout(() => {

        console.log("✅ Process Complete");

        callback();

    }, 2000);

}


// ============================
// Task 3 - Upload File
// ============================

function uploadFile(callback) {

    console.log("📤 Uploading File...");

    setTimeout(() => {

        console.log("✅ Upload Complete");

        callback();

    }, 2000);

}


// ============================
// Task 4 - Generate Report
// ============================

function generateReport(callback) {

    console.log("📄 Generating Report...");

    setTimeout(() => {

        console.log("✅ Report Generated");

        callback();

    }, 2000);

}


// ============================
// Main Runner
// ============================

function runTasks() {

    downloadFile(() => {

        processFile(() => {

            uploadFile(() => {

                generateReport(() => {

                    console.log("\n🎉 All Tasks Finished Successfully");

                });

            });

        });

    });

}


// ============================
// Start Application
// ============================

runTasks();