<script>
</script>

<div class="loading-indicator">
  <span class="loading-indicator-item item-1"></span>
  <span class="loading-indicator-item item-2"></span>
  <span class="loading-indicator-item item-3"></span>
</div>

<style lang="scss">
  .loading-indicator {
    display: flex;
    gap: .25rem;

    .loading-indicator-item {
      width: 6px;
      height: 6px;
      background: var(--color-gray-400);
      border-radius: 50%;

      &.item-1 {
        animation: blink-1 1s ease-in-out 0ms infinite normal none running;
      }
      &.item-2 {
        animation: blink-1 1s ease-in-out 160ms infinite normal none running;
      }
      &.item-3 {
        animation: blink-1 1s ease-in-out 320ms infinite normal none running;
      }
    }
  }

  @keyframes blink-1 {
    0% {
      opacity: 0.5;
      transform: scale(0.5);
    }
    20% {
      opacity: 1;
      transform: scale(1);
    }
    40% {
      opacity: 1;
      transform: scale(1);
    }
    60% {
      opacity: 0.5;
      transform: scale(0.5);
    }
    80% {
      opacity: 0;
      transform: scale(0);
    }
    100% {
      opacity: 0;
      transform: scale(0);
    }
  }

</style>
