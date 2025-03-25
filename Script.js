<script src="script.js" defer></script>
class="box">
    <h3 class="toggle" data-title="High Implementation Cost">+ High Implementation Cost</h3>
    <div class="content" style="display: none;">
        <p><strong>Issue:</strong> Implementing CMM requires a significant financial investment in tools, training, and process improvements.</p>
        <p><strong>Risk:</strong> Small and medium enterprises (SMEs) may struggle to allocate the necessary budget, leading to incomplete implementation.</p>
    </div>
</div>￼Enter
document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll(".toggle");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", function () {
            const content = this.nextElementSibling;

            if (content.style.display === "block") {
                content.style.display = "none";
                this.textContent = "+ " + this.dataset.title;
            } else {
                content.style.display = "block";
                this.textContent = "- " + this.dataset.title;
            }
        });
    });
});
